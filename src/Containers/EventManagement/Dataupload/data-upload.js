import React,{useState, useEffect, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton, Typography } from '@material-ui/core';
import BrowseFile from '../../../Components/BrowseFile/browse-file.component';
import Inputandvalidatebutton from '../../../Components/BrowseFile/inputandvalidatebutton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TableHeader from '../../../Components/Table/tableheader';
import ExistsHeaderInfo from './f_exists_table_header_info';
import NotExistsHeaderInfo from './f_notexists_table_header_info';
import ExistsTableRows from '../existsTableRow';
import NotExistsTableRows from '../notExistTableRows';
import './data-upload.style.scss';
import { ContactsOutlined } from '@material-ui/icons';


  const uploadFile= {
    status: {
        inProgress: false,
        statusMsg: '',
        error: false,
        log: []
    },
    timer: null,
    file: {
        isValidFile: false,
        fileType: '',
        message: '',
        fileName: '',
        ZIP: {
            fileContent: ''
        }
    }

};
  

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    width:'100%',
    color: theme.palette.text.secondary,
    marginBottom:'20px'
  },
  containerWidth:{
    width:'100%',
    marginTop:'10px'
  },
  verticalSpacing_big:{
    height:'20px'
  },
  verticalSpacing_md:{
    height:'15px'
  },
  verticalSpacing_sm:{
    height:'10px'
  },
  verticalSpacing_max:{
    height:'40px'
  },
  table1:{
    width:'100%',
    height:'280px',
    marginBottom:'10px'
   
  },
  content:{
    width:'100%',
    height:'100%',
    marginBottom:'10px'
    
  },

  contentoverflow:{
    overflowY:'scroll'
  },
  jobcount:{
    height:'15px',
    display:'flex',
    alignItems:'flex-Start',
    justifyContent:'flex-end',
    marginRight:'20px',
    fontWeight:'bold'
  }

}));

// GeoMart_GDGIS_Replica_DELTA.gdb.zip
const initialState={ "s3Path": "s3://geomartcloud-datastore-dev/gpom/gddelta/", 
"featureClasses": [ { "name": "DPD", "action": "create" }, 
{ "name": "PoleStructure", "action": "append" }, 
{ "name": "ServiceLocation", "action": "override" } ], 
 
"transactionLogName": "GEOHUB_DATAUPLOAD_CREATEJOB"
 };




const Dataupload = (props) => {
  const [input, setInput]=useState("");
  // const [validate, setValidate]=useState("");
  const classes = useStyles();
  const [isError, setisError] = useState(false);
  const [Message, setMessage] = useState("");
  const [upload, setUpload] = useState(uploadFile);
  const [textfield, setTextfield] = useState("");
  const [selectedvalue,setSelectedvalue]=useState(initialState);




const uploadInputHandler=useCallback(async()=>{
  // console.log(selectedvalue);
  try {
    const response=await fetch("https://ak2xrciard.us-west-2.atcapi.pge.com/geohub/dataupload/createjob",{
      method:"POST",
      body:JSON.stringify(selectedvalue),
      headers:{
        'Content-Type':'application/json',
        'X-Forwarded-Proto':'https',
        'X-Forwarded-Port': 443
      }
     });
     const data=await response.json();
     setisError(false);
     if(data.status==="Failed"){
      throw new Error(data.message);
     }
     setMessage(data.message);
     setTimeout(() => {
      props.gettab('event',1);
     }, 2000);

  } catch (error) {
  setisError(true);
   setMessage(`${error}`);

  }
 

});

const onFileSelectedHandler=(file)=>{
  let selObj=Object.assign({},{
      ...upload,
      file:file
  });
  setUpload(selObj);
  };

  const searchOnChangeHandler=(e)=>{
    setTextfield(e.target.value);
  };
  
  
const clearsearchHandler=()=>{
  setTextfield("");
};

const s3pathinputHandler=(e)=>{
  setInput(e.target.value);
 };

 const buttonValidateHandler=(e)=>{
   const s3path=`${selectedvalue.s3Path}${input}`;
   const curstate={...selectedvalue,['s3Path']:s3path};
   setSelectedvalue(curstate);
    setInput("");
 };


const handleChangeHandler=(e)=>{
  let selected=e.target.value;
  const index=selectedvalue.featureClasses.findIndex(element=>element.name===e.target.name);
  let curname=selectedvalue.featureClasses[index].name;
  let sel=selectedvalue.featureClasses.map(cur=>{
    if(cur.name===curname){
      cur.action=selected;
      return cur;
    }
    else{
      return cur;
    }
  });
  let updatedstate={...selectedvalue,['featureClasses']:sel};
  setSelectedvalue(updatedstate);

};
const getrowcount=()=>(
 (selectedvalue.featureClasses.filter(cur=>cur.action !=="create")).length
);
const getrowcount2=()=>(
  (selectedvalue.featureClasses.filter(cur=>cur.action ==="create")).length
 );




    return (
    <div >
      <Grid container >
        <Grid item xs={12}>
        <Inputandvalidatebutton textinput={s3pathinputHandler} value={input} btnvalidate={buttonValidateHandler}/>
            {/* <BrowseFile onFileSelected={onFileSelectedHandler} file={upload.file} disabled={upload.status.inProgress}/> */}
        </Grid>
        <Grid container item className={classes.root} >
        <Paper className="time-place-table-container"> 
        <Grid item xs={6}>
        <Paper>
              <TextField
                      fullWidth
                      value={textfield}
                      onChange={searchOnChangeHandler}
                      placeholder="Search by name"
                      InputProps={{
                          startAdornment: (
                              <InputAdornment position="start">
                                  <SearchIcon />
                              </InputAdornment>
                          ),
                          endAdornment: (<InputAdornment position="end">
                              <IconButton onClick={clearsearchHandler }>
                                  <ClearIcon />
                              </IconButton>
                          </InputAdornment>)
                      }}
                  />
              </Paper>
            </Grid >
       <Grid item container>
         <Paper  className={classes.paper}>
         <Box className={classes.table1}>
           <Grid><Typography color={'primary'}>NOT EXISTS IN DB</Typography></Grid>
           <div  className={getrowcount2()>5? `${classes.content} ${classes.contentoverflow}`:classes.content}>

           <TableHeader headerinfo={NotExistsHeaderInfo}>
           <NotExistsTableRows selectedvalue={selectedvalue} filtervalue={textfield}/>
        
           </TableHeader>
            <Box className={classes.verticalSpacing_md}></Box>
           <Box className={classes.jobcount}>
             {getrowcount2() !==1? `${getrowcount2()} FeatureClasses`: `${getrowcount2()} FeatureClass`}
           </Box>
           </div>
           <Box className={classes.verticalSpacing_max}></Box>
           </Box>
           <Box className={classes.verticalSpacing_big}></Box>

     <Box className={classes.table1}>
         <Grid><Typography color={'primary'}>ALREADY EXISTS IN DB</Typography></Grid>
         <div  className={getrowcount()>5? `${classes.content} ${classes.contentoverflow}`:classes.content}>
         <TableHeader headerinfo={ExistsHeaderInfo}>
           <ExistsTableRows selectedvalue={selectedvalue} filtervalue={textfield} clicked={handleChangeHandler}/>
           </TableHeader>
           <Box className={classes.jobcount}>
             {getrowcount() !==1? `${getrowcount()} FeatureClasses`: `${getrowcount()} FeatureClass`}
           </Box>
         </div>
           </Box>
           <Box className={classes.verticalSpacing_sm}></Box>
         </Paper>
          </Grid >
        </Paper>
   
        <Grid item xs={12}>
        <Box className={classes.verticalSpacing_sm}></Box>
          <div className="row-inline-center">
              <Button variant="outlined"
                  className="button-margin-right"
                  color="primary"
                  onClick={uploadInputHandler}>
                  UPLOAD
              </Button>
              <Typography color={ !isError ? "secondary" : "error"} variant="body1" style={{ paddingTop: '3px', marginRight: '5px' }}>
              {Message}
                    </Typography>
              {/* <Typography>Heloo world</Typography> */}
              </div>
         
              <Box className={classes.verticalSpacing_md}></Box>
            </Grid>
        </Grid>
                
        </Grid>

      </div>

      );
};
// "homepage": "https://geohubdev.nonprod.pge.com",
export default Dataupload;