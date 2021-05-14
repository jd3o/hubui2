import React from 'react';
import TextField from '@material-ui/core/TextField';
import { IconButton, Paper } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import HeaderInfo from '../../Containers/EventManagement/Dataupload/table_header_info';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },

    main:{
      display:'flex',
      justifyContent:'space-between'
    }
  
  }));

const CustomTable = (props) => {
    const classes = useStyles();
    return ( 
        <Grid item xs={12} >
        <TableContainer >
  
        <Table aria-label="collapsible table">
            <TableHead style={{ height: '46px', marginBottom:'10px'}}>
                <TableRow >
                <TableCell style={{ display: 'flex', height: '37px', alignItems:'center'}}>
                <Grid item container>
                {
                  props.headerinfo.map(field=>(
                    <Grid item xs={field.length} key={field.name}>
                      <Typography>{field.name}</Typography> </Grid >))
                }       
                </Grid >
                </TableCell>
                </TableRow>
            </TableHead>
      {props.children}
        </Table>
 
    </TableContainer>
</Grid>
     );
};
 
export default CustomTable;