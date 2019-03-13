import React, { Component } from 'react';

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';
import PropTypes from "prop-types";
import Avatar from '@material-ui/core/Avatar';


import html from "../imgs/html.svg";
import css from "../imgs/css.svg";
import javascript from "../imgs/javascript.svg";
import man_laptop_v2 from '../imgs/man-laptop-v2.svg';

//footer appbar imports
import facebook from '../icons/facebook.svg';
import linkedin from '../icons/linkedin.svg';
import instagram from '../icons/instagram.svg';
import twitter from '../icons/twitter.svg';
import pinterest from '../icons/pinterest.svg';
import logo_white from '../logo/logo-white.svg';
import logo_black from '../logo/logo-black.svg';
import mail from '../icons/mail.svg';
import phone1 from '../icons/phone.svg';
import phone2 from '../icons/cellphone.svg';
import man_laptop_v1 from "../imgs/man-mobile.svg";

import './banner/Banner.css';
import '../index.css';


const styles = theme => ({
    root: {
        flexGrow: 1,
        [theme.breakpoints.down("lg")]: {
            width: 1024
        },
        fontFamily: 'Source Sans Pro',
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    buttonHeader: {
        paddingLeft: 11,
        paddingRight: 18,
        paddingTop:2,
        fontSize: 16,
        fontWeight: 400,
        fontFamily: 'Source Sans Pro',
        "&:hover": {
            color: "#FC831F"
        },
        textTransform: 'none',

    },
    buttonFooter: {
        margin: theme.spacing.unit,
        fontWeight: 400,
        fontSize: 18,
        fontFamily: 'Source Sans Pro',
        color: "#ffffff",
        "&:hover": {
            color: "#FC831F"
        },
        textTransform: 'none',

    },
    showMore: {
        align: 'center',
        fontWeight: 600,
        fontSize: 18,
        fontFamily: 'Source Sans Pro',
        textTransform: 'none',
        boxShadow: "none",
        border: '2px solid #ef6c00',
        color: '#ef6c00',

},
    aboutMe: {
        paddingRight: 47,
        paddingLeft: 47,
        backgroundColor: "#ffffff",

    },
    relationships: {
        paddingRight: 47,
        paddingLeft: 47,
        backgroundColor: "#ffffff",
    },
    headings: {

    },
    input: {
        display: "none"
    },
    cssSecondary: {
        borderColor: "#ef6c00"
    },
    cssPrimary: {
        backgroundColor: "#ef6c00",
        "&:hover": {
            backgroundColor: "#FC831F"
        }
    },
    cssFooter: {
        backgroundColor: "#283593",
        paddingRight: 47,
        paddingLeft: 47,
    },
    appbarHeader: {
        boxShadow: "none", //removing shadows from appbar
        height: 64,
        marginTop: -10,
    },
    bigAvatar: {
        margin: 10,
    },
    toolbarHeader: {
        backgroundColor: "#ffffff",
        minWidth: 930,
        paddingRight:47,
        paddingLeft: 47,

    },
    appbarFooter: {
        boxShadow: "none",
    },
    toolbarFooter: {
        backgroundColor: "#283593",
        borderBottom: '1px solid #9393DD',
        height: 85,
        paddingRight: 47,
        paddingLeft: 47,
        boxShadow: "none" //removing shadows from appbar bottom
    },
    banner: {
        paddingRight: 47,
        paddingLeft: 47,
    },
    requirements: {
        paddingRight: 47,
        paddingLeft: 47,
    },
    users: {
        paddingRight: 47,
        paddingLeft: 47,

    },
    signUp: {
        margin: 0,
        paddingRight: 47,
        paddingLeft: 47,
        backgroundColor: "#ffffff",
    }
});

//header button text
const navbarElements = ['About me','Relationships','Requirements','Users','Sign Up'];

//BANNER TEXT
const
    titleText = 'Test assignment for Frontend Developer position',
    paragraphText = 'We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. ' +
        'Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!',
    buttonText2 = 'Sign Up';

//relationships text
const
    title_1 = 'About my relationships with web-development',
    column_title_1 = 'I`m in love with HTML',
    column_title_2 = 'CSS is my best friend',
    column_title_3 = 'JavaScript is my passion',
    column_text_1 = 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.',
    column_text_2 = 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
    column_text_3 = 'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.';

//requirements text
const
    title = 'General requirements for the test task',
    paragraph_1 = 'Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.',
    paragraph_2 = 'If you`re a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.',
    paragraph_3 = 'Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.';

//users text
const
    title1 = 'Our cheerful users',
    title2 = 'Attention! Sorting users by registration date';

//footer appbar text
const topics_list =
    {
        topic_list_1: ['News','Blog','Partners','Shop'],
        topic_list_2: ['Overview','Design','Code','Collaborate'],
        topic_list_3: ['Tutorials','Resources','Guides','Examples'],
        topic_list_4: ['FAQ','Terms','Conditions','Help']
    };
const footerCopyright = '© abz.agency specially for the test task';

//ABOUTme TEXT
const
    title_11 = 'Let`s get acquainted',
    title_22 = 'I am cool frontend developer',
    paragraph_11 = 'When real users have a slow experience on mobile, they`re much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.',
    paragraph_22 = 'Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.',
    buttonText1 = 'Sign Up';



class AppComponent extends Component {
    constructor(props)
    {
        super(props);
    }

    state = {
        positions_list: [],
        users_list:[],
        header_user:[]
    };
    componentDidMount(){
        this.getPositions();
        this.getUsers();
    }
    /*async getHeaderUser(){
        const HeaderUserUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/user/1';
        const res = await fetch(HeaderUserUrl);
        const data = await res.json();
        return this.setState({ header_user: data.user });
    }*/
    async getPositions(){
        const positionsUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
        const res = await fetch(positionsUrl);
        const data = await res.json();
        return this.setState({ positions_list: data.positions });
    }

    async getUsers(){
        const usersUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6';

        const res = await fetch(usersUrl);
        const data = await res.json();
        console.log(data.users.sort((a, b) => a.registration_timestamp - b.registration_timestamp));

        return this.setState({ users_list: data.users });

    }


    render(){
        const { classes } = this.props;
        return (
            <Grid container className={classes.root}>

                {/*HEADER COMPONENT*/}
                <AppBar
                    className={classes.appbarHeader}
                    position="sticky"
                >
                    <Toolbar className={classes.toolbarHeader}>
                        <img
                            src={logo_black}
                            alt="logo"
                            width="134"
                            height="25"
                        />
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon />
                        </IconButton>

                        {navbarElements.map(element =>

                            <Button
                                className={classes.buttonHeader}
                                key={element.toString()}
                                href={'#' + element}
                            >
                                {element}
                            </Button>
                        )}

                        <Avatar
                            className={classes.bigAvatar}
                            alt=""
                            src="http:\/\/frontend-test-assignment-api.abz.agency\/images\/users\/superstar.jpg"
                        />
                    </Toolbar>
                </AppBar>


                {/*BANNER COMPONENT*/}
                <Grid
                    container
                    className={classes.banner}
                    id='banner'
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-start"
                >
                    <Grid item lg={6} md={6} xs={12} >
                        <h1 id='h1'>{titleText}</h1>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}></Grid>

                    <Grid item lg={6} md={6} xs={12}>
                        <p className="p1">{paragraphText}</p>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}></Grid>

                    <Grid item lg={4} md={4} xs={12}>
                        <Button
                            style={{ marginTop: 45}}
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.cssPrimary}
                        >
                            {buttonText1}
                        </Button>
                    </Grid>
                    <Grid item lg={8} md={8} xs={12}></Grid>
                </Grid>

                {/*ABOUT ME */}
                <Grid container className={classes.aboutMe}>
                    <Grid item lg={3}></Grid>
                    <Grid item lg={6} style={{alignItems: 'center'}} id='h1'>
                        <h2 align="center" style={{margin:0}}>{title_11}</h2>
                    </Grid>
                    <Grid item lg={3}></Grid>

                    <Grid item lg={4} xs={12}>
                        <img src={man_laptop_v1} alt="man-laptop-v1"/>
                    </Grid>
                    <Grid item lg={8} xs={12}>
                        <h4 style={{ marginBottom:0}}>{title_22}</h4>
                        <p className="p2">{paragraph_11}</p>
                        <p className="p2">{paragraph_22}</p>
                        <Button className={classes.button}>{buttonText2}</Button>
                    </Grid>
                </Grid>


                {/*RELATIONSHIP COMPONENT*/}
                <Grid container className={classes.relationships}>
                    <Grid item lg={2}></Grid>
                    <Grid item lg={8} id='h1'>
                        <h2 align="center" style={{margin:0}}>
                            {title_1}
                        </h2>
                    </Grid>
                    <Grid item lg={2}></Grid>
                    <Grid item lg={4} md={12} xs={12}>

                        <img src={html} alt="html"/>
                        <h4 style={{marginBottom: 25}}>{column_title_1}</h4>
                        <p className="p2">{column_text_1}</p>
                    </Grid>
                    <Grid item lg={4} md={12} xs={12}>

                        <img src={css} alt="css"/>
                        <h4 style={{marginBottom: 25}}>{column_title_2}</h4>
                        <p className="p2">{column_text_2}</p>
                    </Grid>
                    <Grid item lg={4} md={12} xs={12}>

                        <img src={javascript} alt="javascript"/>
                        <h4 style={{marginBottom: 25}}>{column_title_3}</h4>
                        <p className="p2">{column_text_3}</p>



                    </Grid>
                </Grid>

                {/*REQUIREMENT COMPONENT*/}
                <Grid container className={classes.requirements} id="requirements">
                    <Grid item lg={12}>
                        <h2 align="center" style={{margin:0}} id='h1'>
                            {title}

                        </h2>
                    </Grid>
                    <Grid item lg={6} md={12} xs={12}>
                        <p className="p2" style={{marginBottom: 27}}>{paragraph_1}</p>
                        <p className="p2" style={{marginBottom: 27}}>{paragraph_2}</p>
                        <p className="p2">{paragraph_3}</p>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <img style={{ float: 'right'}}
                             src={man_laptop_v2}
                             alt="man-laptop-v2"
                             align="right"

                        />
                    </Grid>
                </Grid>

                {/*USERS COMPONENT*/}
                <Grid container className={classes.users}>
                    <Grid item lg={2}></Grid><Grid item lg={8} id='h1'>
                        <h2 align="center" style={{margin:0}}>
                            {title1}
                        </h2>
                    </Grid><Grid item lg={2}></Grid>

                    <Grid item lg={2}></Grid><Grid item lg={8} id='h1'>
                        <p className="p2" align="center" style={{margin:0}}>
                            {title2}
                        </p>
                    </Grid><Grid item lg={2}></Grid>
                    {
                        this.state.users_list.map(item =>
                            <Grid item lg={4}>
                                <Avatar
                                    className={classes.bigAvatar}
                                    style={{ float: 'left'}}
                                    alt={item.name}
                                    src={item.photo}
                                />
                                <h5 style={{margin:0}}>
                                    {item.name}
                                </h5>
                                <p className="p2" style={{margin:0}}>
                                    {item.position}
                                </p>
                                <p className="p2" style={{margin:0}}>
                                    {item.email}
                                </p>
                                <p className="p2" style={{margin:0}}>
                                    {item.phone}
                                </p>
                            </Grid>
                        )
                    }
                    {/*
                     [hidden]="!product.hasMorePages" кнопка невидимая если страниц больше нет>
                    */}
                    <Grid item lg={4}></Grid>
                    <Grid item lg={4}>
                        <Button
                            style={{display: "none" }}
                            variant="outlined"
                            fullWidth
                            className={classes.showMore}
                            align="center"

                        >
                            Show more
                        </Button>
                    </Grid>
                    <Grid item lg={4}></Grid>
                </Grid>


                {/*signUP ccomponent*/}
                <Grid container className={classes.signUp}>
                    <Grid item lg={4}>
                        <FormControl fullWidth>
                            <TextField
                                id="outlined-full-width"
                                label="Name"
                                placeholder="Name"
                                helperText="Full width!"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item lg={4}>
                        <FormControl fullWidth>
                            <TextField
                                id="outlined"
                                label="Email"

                                placeholder="Email"
                                helperText="Full width!"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item lg={4}>
                        <FormControl fullWidth>
                            <TextField
                                id="outlined"
                                label="Phone"

                                placeholder="Placeholder"
                                helperText="Full width!"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item lg={6} md={12} xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select your position"
                                className={classes.textField}
                                placeholder="olololo"
                                value=""
                                onChange="{this.handleChange('currency')}"
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu
                                    }
                                }}
                                helperText="Please select your currency"
                                margin="normal"
                                variant="outlined"
                            >
                                {
                                    this.state.positions_list
                                        .sort((a, b) => a.registration_timestamp - b.registration_timestamp) // sort users by registration time
                                        .map(item =>
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.name}
                                        </MenuItem>)
                                }
                            </TextField>
                        </FormControl>
                    </Grid>

                    <Grid item lg={6} md={12} xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                //id="outlined-full-width"
                                accept="image/*"
                                id="outlined-button-file"
                                label="Email"
                                style={{ margin: 8 }}
                                placeholder="Email"
                                helperText="Full width!"
                                fullWidth
                                multiple
                                margin="normal"
                                variant="outlined"
                                type="file"
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />

                            <label htmlFor="outlined-button-file">
                            <Button
                                variant="outlined"
                                component="span"
                                className={classes.cssSecondary}
                            >
                                Upload
                            </Button>

                        </label>
                        </FormControl>
                    </Grid>

                </Grid>



                {/*footer COMPONENT*/}


                {/*footer appbar COMPONENT*/}
                <AppBar
                    className={classes.appbarFooter}
                    position="static"

                >
                    <Toolbar className={classes.toolbarFooter}>
                        <img
                            src={logo_white}
                            alt="logo"
                            width="150"
                            height="30"
                            color="#ffffff"
                        />
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        {navbarElements.map(element =>

                            <Button
                                className={classes.buttonFooter}
                                key={element.toString()}
                                href={'#' + element}
                            >
                                {element}
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>
                <Grid container className={classes.cssFooter}>
                    <Grid item lg={4} md={4} xs={12}>


                        <ul>
                            <li>
                                <img src={mail} alt=""/>
                                <span id="footer-span">work.of.future@gmail.com</span>
                            </li>
                            <li>
                                <img src={phone1} alt=""/>
                                <span id="footer-span">+38 (050) 789 24 98</span>
                            </li>
                            <li>
                                <img src={phone2} alt=""/>
                                <span id="footer-span">+38 (095) 556 08 45</span>
                            </li>
                        </ul>


                    </Grid>
                    <Grid item lg={2} md={2} xs={2} style={{ textAlign: 'right' }}>
                        {topics_list.topic_list_1.map(item => <li key={item}>{item}</li>)}
                    </Grid>
                    <Grid item lg={2} md={2} xs={2} style={{ textAlign: 'right' }}>
                        {topics_list.topic_list_2.map(item => <li key={item}>{item}</li>)}
                    </Grid>
                    <Grid item lg={2} md={2} xs={2} style={{ textAlign: 'right' }}>
                        {topics_list.topic_list_3.map(item => <li key={item}>{item}</li>)}
                    </Grid>
                    <Grid item lg={2} md={2} xs={2} style={{ textAlign: 'right' }}>
                        {topics_list.topic_list_4.map(item => <li key={item}>{item}</li>)}
                    </Grid>


                    <Grid item lg={4} md={4} xs={12}>

                        <Typography variant="caption">
                            {footerCopyright}
                        </Typography>

                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>

                        <img src={facebook} alt="facebook"/>
                        <img src={linkedin} alt="linkedin"/>
                        <img src={instagram} alt="instagram"/>
                        <img src={twitter} alt="twitter"/>
                        <img src={pinterest} alt="pinterest"/>

                    </Grid>
                </Grid>
            </Grid>
        )
    }
}


AppComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppComponent);
