import React, { Component } from 'react';
import Header from './header/Header';
import Banner from './banner/Banner';
import AboutMe from './aboutMe/AboutMe';
import Relationships from './relationships/Relationships';
import Requirements from './requirements/Requirements';
import Users from './users/Users';
import SignUp from './signUp/SignUp';
import Footer from './footer/Footer';


import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">

        <Header/>
        <Banner/>
        <AboutMe/>
        <Relationships/>
        <Requirements/>
        <Users/>
        <SignUp/>
        <Footer/>

      </div>
    );
  }
}
