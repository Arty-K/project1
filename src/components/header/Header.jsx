import React, { Component } from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap/lib/';
import logo from '../../logo/logo.svg';


export default class Header extends Component {
    render(){
        const navbarElements=this.props.navbarElements;
        return(
            <Navbar bg="light" expand="lg"  sticky="top">
                <Navbar.Brand href="#">
                    <img
                        src={logo}
                        width="150"
                        height="30"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">
                        {navbarElements.map(element =>
                            <Nav.Link
                                key={element.toString()}
                                href={'#' + element}
                            >
                                {element}
                            </Nav.Link>
                        )}
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        );
    }
}