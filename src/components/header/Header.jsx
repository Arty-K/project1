import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap/lib/';



export default class Header extends Component {
    render(){
        return(
            <Container>
                <Row>
                    <Col md={12}>
                           logo
                           buttons
                           singup block
                    </Col>

                </Row>
            </Container>
        );
    }
}