
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '../Input/input.component';
import Typography from '@material-ui/core/Typography';


const Inputandvalidate = (props) => {


    return ( 
        <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} md={6} sm={7} xl={4}>
            <Input label="Enter name of zip file" size="small" inputtext={props.textinput} val={props.value}/>
        </Grid>
        <Grid item xs={12} md={6} sm={5} xl={8}>
           <div className="row-inline-center">
                <label htmlFor="FileInput">
                    <Button variant="outlined" component="span" disabled
                        className="button-margin-right" color="primary" >
                        BROWSE
                    </Button>
                </label>
                <label htmlFor="FileInput">
                    <Button variant="outlined" component="span" onClick={props.btnvalidate}
                        className="button-margin-right" color="primary" >
                        VALIDATE & LIST
                    </Button>
                </label>
             {/* <Typography color={ file.isValidFile ? "secondary" : "error"} variant="body1" style={{ paddingTop: '3px', marginRight: '5px' }}> */}
          {/* {file.message}
                </Typography> */}
           
            </div> 
        </Grid>
    </Grid>
     );
};
 
export default Inputandvalidate;