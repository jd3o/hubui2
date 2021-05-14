
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
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

const NotExistTableRows = (props) => {
const classes = useStyles();

    return ( 
        <TableBody>
         {
            props.selectedvalue.featureClasses.map(row => {
               if (row.name.toLowerCase().includes(props.filtervalue.toLowerCase()) && row.action==='create'){
               return  (<TableRow key={row.name}>
                <TableCell style={{ display: 'flex', height: '37px', alignItems:'center'}}>
                <Grid item xs={12} >
                <Typography className={classes.main}>{row.name}</Typography>  
                </Grid >
                </TableCell>
                </TableRow>);
               }

            }) 
         }
        </TableBody>
     );
};
 
export default NotExistTableRows;


