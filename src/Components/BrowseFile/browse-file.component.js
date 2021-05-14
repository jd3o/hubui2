import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '../Input/input.component';
import Typography from '@material-ui/core/Typography';
import validateFileFormat from '../../utils/validateFileFormat';
import './browse-file.style.scss';


const UploadFile = ({ onFileSelected, file, disabled, ...props }) => {

    const [state, setState] = React.useState({
        fileKey: 0
    });

    const handleFileChoose = (e) => {
        if (disabled) {
            return;
        }

        if (e.target.files.length === 0) {
            onFileSelected({
                isValidFile: false,
                fileType: '',
                fileName: '',
                message: '',
                ZIP: {
                    fileContent: ''
                }
            });
            return;
        }

        const fileName = e.target.files[0].name;
        let fileType = '';
        let isValidFile = false;
        let zipFileContent = '';

       
        if (validateFileFormat(fileName, '.zip')) {
            fileType = 'ZIP';
            if (e.target.files.length > 0) {
                const fr = new FileReader();
                fr.onload = (e) => {
                    zipFileContent = btoa(fr.result);
                    isValidFile = true;
                    onFileSelected({
                        isValidFile: isValidFile,
                        fileType: fileType,
                        fileName: fileName,
                        message: 'Validation success.',
                        ZIP: {
                            fileContent: zipFileContent
                        }
                    });
                   
                };
               
                fr.readAsBinaryString(e.target.files[0]);
         
            }
        } else {
            onFileSelected({
                isValidFile: isValidFile,
                fileType: fileType,
                fileName: fileName,
                message: 'Invalid File! Allowed file is a zip file.',
                ZIP: {
                    fileContent: ''
                }
            });
        }
    };

    const cleanInputFile = () => {
        if (!disabled) {
            setState({ ...state, fileKey: state.fileKey + 1 });
        }
    };

    return (
        <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={6} sm={7} xl={4}>
                <input
                    accept=".zip"
                    style={{ display: 'none' }}
                    key={state.fileKey}
                    id="FileInput"
                    type="file"
                    disabled={disabled}
                    onChange={handleFileChoose}
                />

                <Input label="Select a ZIP file" value={file.fileName} disabled size="small" />
            </Grid>
            <Grid item xs={12} md={6} sm={5} xl={8}>
               <div className="row-inline-center">
                    <label htmlFor="FileInput">
                        <Button variant="outlined" component="span" disabled={disabled}
                            className="button-margin-right" color="primary" onClick={cleanInputFile}>
                            BROWSE
                        </Button>
                    </label>
                 <Typography color={ file.isValidFile ? "secondary" : "error"} variant="body1" style={{ paddingTop: '3px', marginRight: '5px' }}>
              {file.message}
                    </Typography>
               
                </div> 
            </Grid>
        </Grid>
    );
};

export default UploadFile;
