
import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import TableHeader from '../../../Components/Table/tableheader';
import StatusHeaderInfo from './f_upload_status_header_info';
import UploadStatusRows from './uploadsatusrows';
import './upload_status.style.scss';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    width:'100%',
    color: theme.palette.text.secondary
  },
  containerWidth:{
    width:'100%',
    marginTop:'10px'
  },
  verticalSpacing:{
    height:'20px'
  },
  verticalSpacing_md:{
    height:'15px'
  },
  table1:{
    width:'100%',
    height:'300px',
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
    alignItems:'center',
    justifyContent:'flex-end',
    marginRight:'20px',
    fontWeight:'bold'
  }

}));



const Uploadstatus = (props) => {
  const classes = useStyles();

  const [status, setStatus] = useState([]);
  const [inputvalue, setInputvalue] = useState("");



  const getjobstatus=async()=>{
    const response=await fetch("https://ak2xrciard.us-west-2.atcapi.pge.com/geohub/dataupload/getjobstatus",{
      method:"POST",
      body:JSON.stringify({}),
      headers:{
        'Content-Type':'application/json',
        'X-Forwarded-Proto':'https',
        'X-Forwarded-Port': 443
      }
     });
     const data=await response.json();
     console.log(data);
     setStatus(data.jobInfoList);
  };

  useEffect(()=>{
    getjobstatus();

  },[]);

const searchOnChangeHandler=(e)=>{
  setInputvalue(e.target.value);
};

const clearsearchHandler=()=>{
  setInputvalue("");
};

// const getstatuscount=()=>(
//   console.log(status);
//   // (status.forEach(cur=>cur.action ==="create")).length
//  );


    return (
    <div >
      <Grid container >

        <Grid container item className={classes.root} >
        <Paper className="time-place-table-container"> 
        <Grid item xs={6}>
        <Paper>
              <TextField
                      fullWidth
                      value={inputvalue}
                      onChange={searchOnChangeHandler}
                      placeholder="Search by JobID"
                      InputProps={{
                          startAdornment: (
                              <InputAdornment position="start">
                                  <SearchIcon />
                              </InputAdornment>
                          ),
                          endAdornment: (<InputAdornment position="end">
                              <IconButton onClick={clearsearchHandler}>
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
           <div  className={status.length>5? `${classes.content} ${classes.contentoverflow}`:classes.content} >
           <TableHeader headerinfo={StatusHeaderInfo}>
             
           <UploadStatusRows selectedvalue={status} filtervalue={inputvalue}/>

           </TableHeader>

           <Box className={classes.verticalSpacing_md}></Box>

           </div>

           </Box>  
           <Box className={classes.jobcount}>
             {status.length !==1? `${status.length} Jobs`: `${status.length} Job`}
           </Box>
         </Paper>
        </Grid >
        </Paper>
        </Grid>               
        </Grid>

      </div>

      );
};
 
export default Uploadstatus;