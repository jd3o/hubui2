
import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { blue,cyan } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      width:'100%',
      color: theme.palette.text.secondary
     
    },
    main:{
      display:'flex',
      justifyContent:'left',
      height:'100%',
      alignItems:'center',
      fontSize:'12px'
    }

  
  }));



const UploadStatusRows = (props) => {
const classes = useStyles();

const tableclickhandler=(event, id)=>{
 console.log(id);
};

const handleChange=(e)=>{
    // let stateupdate=[];
    let selected=e.target.value;
    const index=selectedvalue.findIndex(element=>element.name===e.target.name);
    let updatedValue={[selected]:selectedvalue[index][selected]};

};


let tablerows=<TableRow><TableCell style={{display: 'flex', height: '37px ', alignItems:'center',overflow: 'hidden'}}>Loading....</TableCell></TableRow>;
if (props.selectedvalue.length!==0){
  tablerows= (
    props.selectedvalue.map(row => {
      if (row.id.includes(props.filtervalue) && row ){
          return (<TableRow hover key={row.id} role="checkbox" onClick={(event)=>tableclickhandler(event, row.id)}>
          <TableCell style={{ display: 'flex', height: '37px ', alignItems:'center'}}  >
          <div  id={row.id} style={{ height: '100% ', width:'100%'}}  >
          <Grid item container>
          <Grid item xs={4} >
          <Typography className={classes.main}>{row.id}</Typography>  
          </Grid >
          <Grid item xs={2} >
          <Typography className={classes.main}>{row.status}</Typography>  
          </Grid >
          <Grid item xs={2} >
          <Typography className={classes.main}>{row.createdby}</Typography>  
          </Grid >
          <Grid item xs={2} >
          <Typography className={classes.main}>{row.createdatetime}</Typography>  
          </Grid >
          <Grid item xs={2} >
          <Typography className={classes.main}>{row.lastupdatedatetime}</Typography>  
          </Grid >
          </Grid >
          </div>
          </TableCell>
          </TableRow>);
      }

  })
  );
}






console.log(props);
    return ( 
    
        <TableBody>
         {
           tablerows
        
         }
        </TableBody>
     );
};
 
export default UploadStatusRows;

