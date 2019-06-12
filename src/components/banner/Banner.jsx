import React, { Component } from 'react';
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const banner = {
    titleText: 'Test assignment for Frontend Developer position',
    paragraphText: 'We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!'
};


export default class Banner extends Component {
    static propTypes = {
        banner:PropTypes.object,
        TitleText:PropTypes.string,
        paragraphText:PropTypes.string,
    };

    render(){
        return(
            <>
                <Grid container id='banner'>
                    <div className='container'>
                        <Grid container>
                            <Grid item lg={6} md={6} xs={12}>
                                <h1>
                                    {banner.titleText}
                                </h1>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12}/>
                        </Grid>
                        <Grid container spacing={32}>
                            <Grid item lg={6} md={6} xs={12}>
                                <p className="p1">
                                    {banner.paragraphText}
                                </p>
                            </Grid>
                            <Grid item lg={6} md={6} xs={10}/>
                        </Grid>
                        <Grid container spacing={32}>
                            <Grid item sm={4} xs={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    size="medium"
                                >
                                    {'Sign Up'}
                                </Button>
                            </Grid>
                            <Grid item sm={8} xs={2}/>
                        </Grid>
                    </div>
                </Grid>
            </>
        );
    }
}