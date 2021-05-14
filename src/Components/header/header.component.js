
import React from 'react';
import {AppBar,Toolbar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../Assets/images/pge-logo-small-2.png';

import './header.style.scss';


const Header = (props) => {

    const useStyles = makeStyles((theme) => ({
        title: {
          flexGrow: 1,
          marginLeft: theme.spacing(1)
        }
      }));
      const classes = useStyles();
    return ( 
            <AppBar position = "static">
                <Toolbar>
                    <img src={logo} alt="logo"/>
                    <div className={classes.title}>
                        <span className='title'>GeoHub Data Management</span>
                        <span className='subtitle'>Powered by GeoMart</span>
                    </div>
                </Toolbar>
            </AppBar>
     );
};
 
export default Header;