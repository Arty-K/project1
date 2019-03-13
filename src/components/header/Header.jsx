import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import logo from '../../logo/logo.svg';
import './header.css'

const styles = theme => ({

    button: {
        margin: theme.spacing.unit,
    },

    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },

});


class Header extends Component {

    state = {
        auth: true,
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render(){

        const classes = this.props.classes;

        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return(
            <div className={classes.root}>

                <AppBar className='appbar' position={"fixed"}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            <img src={logo} alt=""/>
                        </Typography>
                        {
                            <div>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>

                                {navbarElements.map(element =>
                                    <Button
                                        className={classes.button}
                                        key={element.toString()}
                                        href={'#' + element}
                                    >
                                        {element}
                                    </Button>
                                )}

                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                      }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                      }}
                                    open={open}
                                    onClose={this.handleClose}
                                >

                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        }
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(Header);