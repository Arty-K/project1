import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import '../index';

//COMPONENTS IMPORTS
import Header from "./header/Header";
import Banner from "./banner/Banner";
import AboutMe from "./aboutMe/AboutMe";
import Relationships from "./relationships/Relationships";
import Requirements from "./requirements/Requirements";
import Users from "./users/Users";
import Footer from "./footer/Footer";
import SignUp from "./signUp/SignUp";


const styles = ({
    root: {
        flexGrow: 1,
        fontFamily: 'Source Sans Pro',
    }
});


class AppComponent extends Component {
    state = {
        positions_list: [],
        users_list:[],
        header_user:[],
        token: '',
        button_links:[],
        current_link:'',
        mobileOpen: false,
        name:'',
        email:'',
        phone:'',
        select:'ololo',
        file:{}
    };
    componentWillMount(){
        this.getToken();
        this.getFirstUser();
    }
    componentDidMount(){
        this.getPositions();
        this.getUsers();
    }
    async getToken(){
        const tokenUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/token';
        const res = await fetch(tokenUrl);
        const data = await res.json();
            console.log(data);
        return this.setState({ token: data.token });
    }
    async getFirstUser(){
        const firstUserUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users/1';
        const res = await fetch(firstUserUrl);
        const data = await res.json();
        return this.setState({ header_user: data.user});
    
    }
    async getPositions(){
        const positionsUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
        const res = await fetch(positionsUrl);
        const data = await res.json();
        return this.setState({ positions_list: data.positions });
    }
    async getUsers(){
        const usersUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6';
        const res = await fetch(usersUrl);
        console.log(res);
        const data = await res.json();
            console.log(data);
        const sortedUsers  = data.users.sort((a, b) => a.registration_timestamp - b.registration_timestamp);
            console.log(sortedUsers);
        return this.setState(
            { 
                users_list: sortedUsers,
                current_link: data.links.next_url
            });
    }
    showNextUsers = () => {
        let usersUrl = this.state.current_link;
        
        if(this.state.header_user === '' && usersUrl.endsWith('5')) {
            usersUrl = usersUrl.slice(0, -1).concat('6');
            console.log(usersUrl);
        }
        if(!usersUrl) {
            console.log(usersUrl);
            fetch(usersUrl)
                .then((response) => response.json())
                .then((data) => this.setState(
                        {
                            users_list: data.users.sort((a, b) => a.registration_timestamp - b.registration_timestamp),
                            current_link: data.links.next_url,
                            button_links : data.links
                        })
                    );
        } else {
            console.log(`${usersUrl} end`)
        }
    };
    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
      };
    onFormValue = (data) => {
        console.log('Value received: ', data);
    };

    render(){
        const { classes } = this.props;
        return (
            <div>
                <Header
                    handleDrawerToggle = {this.handleDrawerToggle}
                    header_user = {this.state.header_user}
                    mobileOpen = {this.state.mobileOpen}
                />
                <Banner/>
                <AboutMe/>
                <Relationships/>
                <Requirements/>
                <Users
                    users_list = {this.state.users_list}
                    current_link = {this.state.current_link}
                    showNextUsers = {this.showNextUsers}
                />
                <SignUp
                    positions_list = {this.state.positions_list}
                    onFormValue={this.onFormValue}
                />
                <Footer/>
            </div>
        );
    }
}


export default withStyles(styles)(AppComponent);
