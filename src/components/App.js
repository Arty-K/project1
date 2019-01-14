import React, { Component } from 'react';

import Header from './header/Header';
import Banner from './banner/Banner';
import AboutMe from './aboutMe/AboutMe';
import Relationships from './relationships/Relationships';
import Requirements from './requirements/Requirements';
import Users from './users/Users';
import SignUp from './signUp/SignUp';
import Footer from './footer/Footer';

import Container from 'react-bootstrap/lib/Container';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <Container>

        <Header/>
        <Banner/>
        <AboutMe/>
        <Relationships/>
        <Requirements/>
        <Users/>
        <SignUp/>
        <Footer/>

      </Container>
    );
  }
}
