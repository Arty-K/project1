import React, { Component } from 'react';
import PropTypes from "prop-types";
import ScrollableAnchor from 'react-scrollable-anchor';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import InputMask from "react-input-mask";


const FILE_SIZE = 1600 * 1024;
const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png"
];
const validation_schema = Yup.object().shape({
    email: Yup.string()
        .email('e-mail is not valid!')
        .min(15)
        .required('e-mail is required!'),
    name: Yup.string()
        .min(11)
        .required('name is required!'),
    phone: Yup.string()
        .required('a phone number is required'),
    select: Yup.string()
        .required('position is required'),
    file: Yup.mixed()
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
const signUp = {
    TitleText1: 'Register to get a work',
    TitleText2: 'Attention! After successful registration and alert, update the list of users in the block from the top'
};


export default class SignUp extends Component {
    static propTypes = {
        signUp: PropTypes.object,
        positions_list: PropTypes.array,
        TitleText1:PropTypes.string,
        TitleText2:PropTypes.string,
        validationSchema: PropTypes.object,
        onFormValue: PropTypes.func
    };
    render(){
        const positions_list = this.props.positions_list;
        const startValues = {
            email: '',
            name: '',
            phone: '',
            select: '',
            file: undefined
        };
        return(
            <>
                <Grid container id='signUp'>
                    <ScrollableAnchor id={'Sign Up'}>
                        <div className='container'>
                            <Grid container spacing={16}>
                                <Grid item md={12}>
                                    <h2>
                                        {signUp.TitleText1}
                                    </h2>
                                </Grid>
                            </Grid>
                            <Grid container spacing={16}>
                                <Grid item md={12}>
                                    <h5>
                                        {signUp.TitleText2}
                                    </h5>
                                </Grid>
                            </Grid>
                            <Formik
                                initialValues={startValues}
                                validationSchema={validation_schema}
                                onSubmit={(values, {setSubmitting}) =>
                                {
                                    this.props.onFormValue(values);
                                        this.setState(
                                            {
                                                name: values.name,
                                                email: values.email,
                                                phone: values.phone,
                                                select: values.select,
                                                file: values.file
                                            });
                                        console.log(JSON.stringify(
                                            {
                                                values,
                                                fileName: values.file.name,
                                                type: values.file.type,
                                                size: `${values.file.size} bytes`
                                            }, null, 2));
                                        setSubmitting(false);
                                    }
                                }
                            >
                                {
                                    props => {
                                        const {
                                            values,
                                            touched,
                                            errors,
                                            isSubmitting,
                                            handleBlur,
                                            handleChange,
                                            setFieldValue
                                        } = props;
                                        return (
                                            <Form>
                                                <Grid container spacing={32}>
                                                    <Grid item xs={12} sm={4} >
                                                        <TextField
                                                            id="outlined-full-width"
                                                            name="name"
                                                            label="Name"
                                                            placeholder="Your name"
                                                            fullWidth
                                                            variant="outlined"
                                                            InputLabelProps={{shrink: true}}
                                                            value={values.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            helperText={touched.name ? errors.name : ""}
                                                            error={touched.name && Boolean(errors.name)}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={4} >

                                                        <TextField
                                                            id="outlined-full-width"
                                                            name="email"
                                                            label="Email"
                                                            placeholder="Your email"
                                                            fullWidth
                                                            variant="outlined"
                                                            InputLabelProps={{shrink: true}}
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            helperText={touched.email ? errors.email : ""}
                                                            error={touched.email && Boolean(errors.email)}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={4} >
                                                        <InputMask
                                                            mask="+38 (999) 999-99-99"
                                                            value={values.phone}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        >
                                                            {() =>
                                                                <TextField
                                                                    id="outlined-full-width"
                                                                    name="phone"
                                                                    label="Phone"
                                                                    placeholder="+38 (___) ___ __ __"
                                                                    fullWidth
                                                                    variant="outlined"
                                                                    InputLabelProps={{shrink: true}}
                                                                    helperText={touched.phone ? errors.phone : ""}
                                                                    error={touched.phone && Boolean(errors.phone)}
                                                                />
                                                            }
                                                        </InputMask>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={32} style={{paddingTop: 24}}>
                                                    {positions_list && positions_list.length &&
                                                    <Grid item xs={12} sm={6} >
                                                        <div style={{fontSize: 16, lineHeight:1.2}}>
                                                            <TextField

                                                                id="outlined-full-width"
                                                                select
                                                                name="select"
                                                                placeholder="Select your position"
                                                                fullWidth
                                                                variant="outlined"
                                                                InputLabelProps={{shrink: true}}
                                                                value={positions_list[0].name}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                helperText={touched.select ? errors.select : ""}
                                                                error={touched.select && Boolean(errors.select)}
                                                            >
                                                                {
                                                                    positions_list.map(item =>
                                                                        <MenuItem key={item.id} value={item.name}>
                                                                            {item.name}
                                                                        </MenuItem>)
                                                                }
                                                            </TextField>
                                                        </div>

                                                    </Grid>}
                                                    <Grid item xs={12} sm={6} style={{display: 'flex'}}>
                                                        <TextField
                                                            id="outlined-full-width"
                                                            type="file"
                                                            accept="image/*"
                                                            fullWidth
                                                            variant="outlined"
                                                            multiple
                                                            InputLabelProps={{shrink: true}}
                                                            onBlur={handleBlur}
                                                            onChange={(event) => {
                                                                setFieldValue("file", event.currentTarget.files[0]);
                                                            }}
                                                            helperText={touched.file ? errors.file : ""}
                                                            error={touched.file && Boolean(errors.file)}
                                                        />
                                                        <label htmlFor="contained-button-file">
                                                            <Button variant="contained" component="span" className='fileButton'>
                                                                {'Upload'}
                                                            </Button>
                                                        </label>
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={16} align="center">
                                                    <Grid item md={12} style={{marginTop: 25, marginBottom: 140}}>
                                                        <Button
                                                            type="submit"
                                                            variant="contained"
                                                            disabled={isSubmitting || errors.email && touched.email}
                                                            id='secondaryButton'
                                                        >
                                                            {'Sign up'}
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Form>
                                        );
                                    }}
                            </Formik>
                        </div>
                    </ScrollableAnchor>
                </Grid>
            </>
        );
    }
}
