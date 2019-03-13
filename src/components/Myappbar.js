import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import logo from '../logo/logo.svg';
const navbarElements= ['about me','relationships','requirements','users','sign up'];

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


function myappbar(props) {
    const { classes } = props;
    return(
        <AppBar position="fixed">
            <Toolbar>
                <img src={logo} alt=""/>
                {navbarElements.map(element =>
                    <Button
                        className={classes.button}
                        key={element.toString()}
                        href={'#' + element}
                    >
                        {element}
                    </Button>
                )}
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}


export default withStyles(styles)(myappbar);