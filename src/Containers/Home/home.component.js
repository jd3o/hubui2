
import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import './home.style.scss';
import DataUpload from '../EventManagement/Dataupload/data-upload';
import UploadStatus from '../EventManagement/UploadStatus/upload-status';
import PublishFeatureClass from '../EventManagement/Publishing/publishfeatureclass';

const HomePage = (props) => {


    const [value, setvalue]=useState(0);

    const tabChangeHandler = (event, newValue) => {
        setvalue(newValue);
    };
    const status = {
        views:[<DataUpload gettab={tabChangeHandler}/>,<UploadStatus />,<PublishFeatureClass/>]
    };
    return (
        <div className='mainPage'>
            <Box className='verticalSpacing' color="text.primary"></Box>
            <Paper elevation={5} square style={({ marginBottom: '10px'})}>
                <Tabs
                    variant="fullWidth"
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={tabChangeHandler}>
                    <Tab label="DATA UPLOAD" />
                    <Tab label="UPLOAD STATUS" />
                    <Tab label="PUBLISH FEATURE" />
                </Tabs>
            </Paper>
            {status.views[value]}
        </div>
    );
};

export default HomePage;





