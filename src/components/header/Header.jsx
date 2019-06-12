import React, { Component } from 'react';
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Avatar from '@material-ui/core/Avatar';
import logo_black from '../../logo/logo-black.svg';
import line_menu from "../../icons/line-menu.svg";
import sing_out from "../../icons/sign-out.svg";


const navbarElements = ['About me','Relationships','Requirements','Users','Sign Up'];


export default class Header extends Component {
    static propTypes = {
        navbarElements:PropTypes.object,
        handleDrawerToggle:PropTypes.func,
        mobileOpen:PropTypes.bool,
        header_user:PropTypes.object,
        logo_black:PropTypes.object,
        line_menu:PropTypes.object,
        sing_out:PropTypes.object,
        drawer:PropTypes.object
    };

    render(){
        const handleDrawerToggle = this.props.handleDrawerToggle,
                      mobileOpen = this.props.mobileOpen,
                     header_user = this.props.header_user;
        const drawer = (
            <div>
              <Avatar
                  id='avatar'
                  alt=''
                  src="http:\/\/frontend-test-assignment-api.abz.agency\/images\/users\/superstar.jpg"
              />
              <Divider />
              <List>
                {navbarElements.map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </div>
          );
          
        return(
            <>
                <AppBar id='appbarHeader' position="sticky">
                    <div className='container'>
                        <Toolbar disableGutters style={{ justifyContent: 'space-between' }}>
                            <div style={{display: 'flex'}}>
                                <img
                                    src={logo_black}
                                    alt="logo"
                                    width="134"
                                    height="25"
                                />
                            </div>
                            <Hidden mdUp>
                                <IconButton
                                    aria-label="Open drawer"
                                    onClick={handleDrawerToggle}
                                >
                                    <img
                                        src={line_menu}
                                        alt=""
                                    />
                                </IconButton>
                            </Hidden>
                            <Hidden smDown>
                                <div style={{ display: 'flex' }}>
                                    {navbarElements.map(element =>
                                        <p className='p2' key={element}>
                                            <a
                                                id='buttonHeader'
                                                href={'#' + element}
                                            >
                                                {element}
                                            </a>
                                        </p>
                                    )}
                                </div>
                                <div style={{display: 'flex'}}>
                                    <div id='headerUserInfo'>
                                        <p id='p3' style={{color: 'black', margin: 0}}>{header_user.name}</p>
                                        <p id='p3' style={{color: 'gray', margin: 0, fontSize: 12}}>{header_user.email}</p>

                                    </div>
                                    <Avatar
                                        id='avatar'
                                        alt={header_user.name}
                                        src={header_user.photo}
                                    />
                                    <img
                                        id='sign_out'
                                        src={sing_out}
                                        alt="logo"
                                    />
                                </div>
                            </Hidden>
                        </Toolbar>
                    </div>
                </AppBar>
                <nav >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor='left'
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
            </>
        );
    }
}
