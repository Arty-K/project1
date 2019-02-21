import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap/lib/';
import './Banner.css';


export default class Banner extends Component {
    render(){

        const 
            titleText = 'Test assignment for Frontend Developer position',
            paragraphText = 'We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. ' + 
                              'Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!',
            buttonText = 'Sign Up';

        return(

                <Container className="banner">
                <Row>
                    <Col lg={{span: 6}}>
                        <h1>
                            {titleText}
                        </h1>
                    </Col>
                </Row>

                <Row>
                    <Col lg={{span: 6}} >
                        <h5>
                            {paragraphText}
                        </h5>
                    </Col>
                </Row>

                <Row>
                    <Col lg={{span: 4}}>
                        <Button variant="warning" block>
                            {buttonText}
                        </Button>
                    </Col>
                </Row>

            </Container>


        );
    }
}