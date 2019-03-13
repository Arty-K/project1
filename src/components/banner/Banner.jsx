import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './Banner.css';

const styles = theme => ({
    root: {
        flexGrow: 1
    }
});

class Banner extends Component {
    render(){
        const classes = this.props.classes;
        const
            titleText = 'Test assignment for Frontend Developer position',
            paragraphText = 'We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. ' +
                              'Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!',
            buttonText = 'Sign Up';

        return(
            <div className={classes.root}>
                <Grid container spacing={24} className="banner">
                    <Grid item xs={6}></Grid>
                    <Grid item xs={6}>
                        <h1>

                        </h1>
                    </Grid>

                    <Grid item xs={6}></Grid>
                    <Grid item xs={6}>
                        <h1>

                        </h1>
                    </Grid>

                    <Grid item xs={8}></Grid>
                    <Grid item xs={4}>
                        <h1>
                            <Button variant="contained" color="secondary" className={classes.button}>{buttonText}</Button>
                        </h1>
                    </Grid>
                </Grid></div>


        );
    }
}
export default withStyles(styles)(Banner);