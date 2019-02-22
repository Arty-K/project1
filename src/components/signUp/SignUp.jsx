import React, { Component } from 'react';


//material UI start
import ReactDOM from 'react-dom';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
//end


import {Container, Row, Col, Button, Form, InputGroup} from 'react-bootstrap/lib/';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import FormName from './FormName';
import './signup.css';

import { Formik, Field } from 'formik';
import * as yup from 'yup';




const Schema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),

    email: yup
        .string()
        .min(3)
        .email('Invalid email')
        .required('Required'),

    select: yup
        .string()
        .required('Required')
});


export default class SignUp extends Component {

    //material UI start
    state = {
        name: 'Your name',
    };

    componentDidMount() {
        this.forceUpdate();
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    };
    //end


    render(){

        const
            title_1 = 'Register to get a work',
            title_2 = 'Attention! After successful registration and alert, update the list of users in the block from the top',
            buttonText = 'Sign Up';

        const customInputForm = ({field, form: {touched, errors}, ...props}) => (
            <div>
                <Form.Control
                    invalid={!!(touched[field.name] && errors[field.name])}
                    size="lg"
                    type="email"
                    placeholder="Your email"
                    {...field}
                    {...props}
                />

                {touched[field.name] && errors[field.name]}
            </div>
        );
        /*anchor setting to fit sticky header*/
        configureAnchors({offset: -70, scrollDuration: 600});

        return(
            <Container>
                {/*anchor id for header buttons*/}
                <ScrollableAnchor id={'sign up'}>
                    <Row>
                        <Col lg={12}>
                            {title_1}
                        </Col>
                    </Row>
                </ScrollableAnchor>

                <Row>
                    <Col lg={12}>
                        {title_2}
                    </Col>
                </Row>

                <Formik
                        initialValues={{
                                name: 'name',
                                email: 'email',
                            }}
                            validationSchema={Schema}
                            onSubmit={values => {
                                // same shape as initial values
                                console.log(values);
                            }}
                >
                    <Form>
                        <Row>
                            <Col lg={4}>
                                <Form.Group controlId="formGroupName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    size="lg"
                                    type="text"
                                    placeholder="Your name"
                                />
                                </Form.Group>
                            </Col>

                            <Col lg={4}>
                                <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                    <Field name="email" type={'email'} component={customInputForm}/>
                                {/*
                                //form control below commented instead of component={customInputForm}
                                    <Form.Control
                                    required
                                    size="lg"
                                    type="email"
                                    placeholder="Your email"
                                />
                                */}
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group controlId="formGroupPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    required
                                    size="lg"
                                    type="number"
                                    placeholder="+38"
                                />
                                </Form.Group>
                            </Col>
                        </Row>


                    <Row>
                        <Col lg={6}>
                            <Form.Group  controlId="formGroupDropdown">
                                <Form.Control
                                    required
                                    size="lg"
                                    as="select"
                                >
                                    <option>Select your position</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>

                        <Col lg={6}>

                            <div >
                                <FormControl  variant="outlined">
                                            <InputLabel
                                                  ref={ref => {
                                                  this.labelRef = ReactDOM.findDOMNode(ref);
                                                    }}
                                                     htmlFor="component-outlined"
                                                    >
                                                     Name
                                            </InputLabel>
                                             <OutlinedInput
                                            id="component-outlined"
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                            labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                                             />
                                </FormControl>
                            </div>


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
                            <Button
                                type="submit"
                                variant="secondary"
                                block>
                                {buttonText}
                            </Button>
                        </Col>
                    </Row>
                    </Form>

                </Formik>
            </Container>
        );
    }
}