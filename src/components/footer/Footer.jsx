import React, { Component } from 'react';
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo_white from "../../logo/logo-white.svg";
import facebook from '../../icons/facebook.svg';
import linkedin from '../../icons/linkedin.svg';
import instagram from '../../icons/instagram.svg';
import twitter from '../../icons/twitter.svg';
import pinterest from '../../icons/pinterest.svg';
import mail from '../../icons/mail.svg';
import phone1 from '../../icons/phone.svg';
import phone2 from '../../icons/cellphone.svg';


const topicsList = {
        topicList1: ['News', 'Blog', 'Partners', 'Shop'],
        topicList2: ['Overview', 'Design', 'Code', 'Collaborate'],
        topicList3: ['Tutorials', 'Resources', 'Guides', 'Examples'],
        topicList4: ['FAQ', 'Terms', 'Conditions', 'Help']
    };
const navbarElements = ['About me', 'Relationships', 'Requirements', 'Users', 'Sign Up'];


export default class Footer extends Component {
    static propTypes = {
        topicsList:PropTypes.object,
        topicList1:PropTypes.string,
        topicList2:PropTypes.string,
        topicList3:PropTypes.string,
        topicList4:PropTypes.string,
        logo_white:PropTypes.object,
        navbarElements:PropTypes.object
    };

    render(){
        return(
            <>
                <AppBar id='appbarFooter' position="static">
                    <div className='container'>
                        <Toolbar disableGutters style={{justifyContent: 'space-between'}}>
                            <div style={{display: 'flex'}}>
                                <img
                                    src={logo_white}
                                    alt="logo"
                                    width="134"
                                    height="25"
                                />
                            </div>
                            <div style={{display: 'flex'}}>
                                {navbarElements.map(element =>
                                    <p className='p2' key={'#' + element}>
                                        <a
                                            href={'#' + element}
                                        >
                                            {element}
                                        </a>
                                    </p>
                                )}
                            </div>
                        </Toolbar>
                    </div>
                </AppBar>
                <Grid container id='footer'>
                    <div className='container' >
                        <Grid container spacing={32} >
                            <Grid item md={4} xs={12} style={{display: 'flex'}}>

                                <div className='iconsBlock'>
                                    <div><img src={mail} alt=""/></div>
                                    <div><img src={phone1} alt=""/></div>
                                    <div><img src={phone2} alt=""/></div>
                                </div>
                                <div className='textBlock'>
                                    <p className='p1'>work.of.future@gmail.com</p>
                                    <p className='p1'>+38 (050) 789 24 98</p>
                                    <p className='p1'>+38 (095) 556 08 45</p>
                                </div>
                            </Grid>
                            <Grid item md={2} xs={2}>
                                {topicsList.topicList1.map(
                                    item =>
                                        <li key={item.toString()}>
                                            <p className='p2'>{item}</p>
                                        </li>)}
                            </Grid>
                            <Grid item md={2} xs={2}>
                                {topicsList.topicList2.map(
                                    item =>
                                        <li key={item.toString()}>
                                            <p className='p2'>{item}</p>
                                        </li>)}
                            </Grid>
                            <Grid item md={2} xs={2}>
                                {topicsList.topicList3.map(
                                    item =>
                                        <li key={item.toString()}>
                                            <p className='p2'>{item}</p>
                                        </li>)}
                            </Grid>
                            <Grid item md={2} xs={2}>
                                {topicsList.topicList4.map(
                                    item =>
                                        <li key={item.toString()}>
                                            <p className='p2'>{item}</p>
                                        </li>)}
                            </Grid>
                        </Grid>
                        <Grid item md={12} className='copyright'>
                            <p id='p3'>
                                {`© abz.agency specially for the test task`}
                            </p>
                            <div>
                                <img src={facebook} alt="facebook"/>
                                <img src={linkedin} alt="linkedin"/>
                                <img src={instagram} alt="instagram"/>
                                <img src={twitter} alt="twitter"/>
                                <img src={pinterest} alt="pinterest"/>
                            </div>
                        </Grid>
                    </div>
                </Grid>
            </>
        );
    }
}