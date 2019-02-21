import React, { Component } from 'react';

import { Formik, Form, Field } from 'formik';
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

export default class FormName extends Component {
    render(){
        return(
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
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    touched,
                    errors
                }) => (
                    <Form>
                        <Field
                            name="name"
                            component="textarea"
                        />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                            ) : null}

                        <Field
                            name="email"
                            type="email"
                        />
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                            ) : null}
                        <Field
                            name="select"
                            component="select"
                            placeholder="Select your position">
                                <option value="first">first</option>
                                <option value="second">second</option>
                        </Field>
                        {errors.select && touched.select ? (
                                <div>{errors.select}</div>
                            ) : null}

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        )
    }
}