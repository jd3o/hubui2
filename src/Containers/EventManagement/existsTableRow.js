
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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




const NewRow = (props) => {

const classes = useStyles();
    return ( 

        <TableBody>
    
         {
            props.selectedvalue.featureClasses.map(row => {
            if(row.name.toLowerCase().includes(props.filtervalue.toLowerCase()) && (row.action === 'append' || row.action === 'override') ){
              return (<TableRow key={row.name}>  
              <TableCell style={{ display: 'flex', height: '37px', alignItems:'center'}}>
              <Grid item container>
              <Grid item xs={6} >
              <Typography className={classes.main}>{row.name}</Typography>  
              </Grid >
              <Grid item xs={3} >
              <Radio
              size='small'
              checked={row.action==='override'}
              onChange={props.clicked}
              value='override'
              color="default"
              name={row.name}
              />
               </Grid > 
                  <Grid item xs={3} >
                  <Radio
                  size='small'
                  checked={row.action==='append'}
                  onChange={props.clicked}
                  value='append'
                  color="default"
                  name={row.name}
              />
                  </Grid >  
                  </Grid >
                  </TableCell>
                  </TableRow>);
            }
   
})
        
         }
  

        </TableBody>  
     );
};
 
export default NewRow;


