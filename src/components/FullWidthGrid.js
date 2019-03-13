import React, { Component } from 'react';


//material UI start
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'; // MATERIAL UI GRIP LIKE BOOTSTRAP
//end

import InputMask from "react-input-mask";


import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import { Formik, Field } from 'formik';
import * as yup from 'yup';

const styles = theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'center'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',

    }
});


const Schema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),

    email: yup
        .string()
        .min(2, 'Too Short!')
        .email('Invalid email')
        .required('Required'),

    phone: yup
        .number()
        .test('len', 'Must be exactly 12 characters', val => val.toString().length === 12)
        .required('A phone number is required'),

    select: yup
        .string()
        .required('Required'),

    file: yup
        .mixed()
        .required("A file is required")
        .test(
            "fileSize",
            "File too large",
            value => value && value.size <= FILE_SIZE
        )
        .test(
            "fileFormat",
            "Unsupported Format",
            value => value && SUPPORTED_FORMATS.includes(value.type)
        )
});

const FILE_SIZE = 200 * 1024;
const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png"
];

class SignUp extends Component {

    //material UI start
    state = {
        value: ''
    };


    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    //end


    render(){
        //const classes = this.props.classes;
        const { classes } = this.props;

        const
            title_1 = 'Register to get a work',
            title_2 = 'Attention! After successful registration and alert, update the list of users in the block from the top',
            buttonText = 'Sign Up';

        const customInputName = ({field, form: {touched, errors}, ...props}) => (
            <>
            <TextField
                invalid={touched.name && errors.name ? errors.name : ''}
                {...field}
                {...props}

                id="outlined-full-width"
                label="name"
                placeholder="Your name"
                helperText="Full width!"
                fullWidth

                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                    }}
            />
            {touched.name && errors.name}
            </>
        );
        const customInputEmail = ({field, form: {touched, errors}, ...props}) => (
            <>
            <TextField
                invalid={touched.email && errors.email ? errors.email : ''}
                {...field}
                {...props}

                id="outlined-full-width"
                label="email"
                placeholder="Your email"
                helperText="Full width!"
                fullWidth

                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                    }}
            />
            {touched.email && errors.email}
            </>
        );
        const customInputPhone = ({field, form: {touched, errors}, ...props}) => (
            <>
            <InputMask mask="+38 (999) 999-99-99">
                {()=><TextField
                    id="outlined-full-width"
                    label="phone"
                    placeholder="+38 (___) ___ __ __"
                    helperText="Full width!"
                    fullWidth

                    variant="outlined"
                    InputLabelProps={{
                                            shrink: true,
                                            }}
                />
                }
            </InputMask>
            {touched[field.phone] && errors[field.phone]}
            </>
        );


        /*anchor setting to fit sticky header*/
        configureAnchors({offset: -70, scrollDuration: 600});

        return(
            <div className={classes.root}>
{/*
                <Grid container spacing={16}>
                    /!*SPACING 32 SEEMS EQUAL FOR BOOTSTRAP*!/

                    /!*anchor id for header buttons*!/
                    <ScrollableAnchor id={'sign up'}>
                        <Grid item lg={12}>
                            {title_1}
                        </Grid>
                    </ScrollableAnchor>


                    <Grid item lg={12}>
                        {title_2}
                    </Grid>

                    <Formik
                        initialValues={{
                                name: '',
                                email: '',
                                phone: 'phone',
                                file: undefined
                            }}
                        validationSchema={Schema}
                        onSubmit={values => {
                                // same shape as initial values
                                console.log(values);
                            }}
                    >

                        <Form className={classes.container}>
                            <Grid item lg={4}>
                                <Form.Group controlId="formGroupName">
                                    <Form.Label>Name</Form.Label>
                                    <Field name="name" type={'text'} component={customInputName}/>
                                </Form.Group>
                            </Grid>
                            <Grid item lg={4}>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Field name="email" type={'email'} component={customInputEmail}/>
                                </Form.Group>
                            </Grid>
                            <Grid item lg={4}>
                                <Form.Group controlId="formGroupPhone">
                                    <Form.Label>phone</Form.Label>
                                    <Field name="phone" type={'number'} component={customInputPhone}/>
                                </Form.Group>
                            </Grid>








                            <Grid item lg={6}>
                                /!*SELECT FIELD*!/

                            </Grid>



                            <Grid item lg={6}>
                                /!*FILE FIELD*!/

                            </Grid>
                        </Form>
                    </Formik>

                </Grid>*/}</div>
        );
    }
}
export default withStyles(styles)(SignUp);