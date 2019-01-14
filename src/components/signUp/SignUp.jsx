import React, { Component } from 'react';
import {Container, Row, Col, Button, Form, InputGroup} from 'react-bootstrap/lib/';


export default class SignUp extends Component {
    render(){
        const
            title_1 = 'Register to get a work',
            title_2 = 'Attention! After successful registration and alert, update the list of users in the block from the top',
            buttonText = 'Sign Up';
        return(
            <Container>
                <Row>
                    <Col lg={12}>
                        {title_1}
                    </Col>
                </Row>>

                <Row>
                    <Col lg={12}>
                        {title_2}
                    </Col>
                </Row>

                <Form>
                    <Row>
                        <Col lg={4}>
                            <Form.Group controlId="formGroupName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control size="lg" type="text" placeholder="Your name" />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control size="lg" type="email" placeholder="Your email" />
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group controlId="formGroupPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control size="lg" type="number" placeholder="+38" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>

                <Row>
                    <Col lg={6}>
                        <Form.Group  controlId="formGroupDropdown">
                            <Form.Control size="lg" as="select">
                                <option>Select your position</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col lg={6}>

                        <InputGroup size="lg">
                            <Form.Control
                                placeholder="Upload your photo"
                                aria-label="Upload your photo"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-warning">Upload</Button>
                            </InputGroup.Append>
                        </InputGroup>



                        {/*<div className="custom-file">
                                <input type="file" className="custom-file-input" id="inputGroupFile04"/>
                                    <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
                            </div>
                            <div >
                                <button className="btn btn-outline-secondary" type="button">Button</button>
                            </div>*/}
                    </Col>
                </Row>

                <Row>
                    <Col lg={{span: 4, offset: 4}}>
                        <Button variant="secondary" block>
                            {buttonText}
                        </Button>
                    </Col>
                </Row>

            </Container>
        );
    }
}