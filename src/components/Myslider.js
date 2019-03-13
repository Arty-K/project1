import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import classNames from "classnames";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    bootstrapRoot: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#ef6c00',
        borderColor: '#ef6c00',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#ef6c00',
            borderColor: '#ef6c00',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#ef6c00',
            borderColor: '#ef6c00',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
};


function myslider(props) {
    const { classes } = props;
    return(
        <Grid container spacing={16} id="bgr">
            <Grid item xs={6} zeroMinWidth>
                {/*//сверток текста в ... zeroMinWidth + noWrap*/}

                <Paper className={classes.paper}>
                    <Typography noWrap>
                        testtesttesttesttesttest
                        testtesttesttesttesttesttest
                        testtesttesttesttesttest
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>

            <Grid item xs={6}>
                <Paper className={classes.paper}>testtesttesttesttesttesttest
                    testtesttesttesttesttesttesttesttesttesttest</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>testtesttesttesttesttesttest
                    testtesttesttesttesttesttesttesttesttesttest</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid><Grid item xs={6}>
            <Paper className={classes.paper}>testtesttesttesttesttesttest
                testtesttesttesttesttesttesttesttesttesttest</Paper>
        </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid><Grid item xs={6}>
            <Paper className={classes.paper}>testtesttesttesttesttesttest
                testtesttesttesttesttesttesttesttesttesttest</Paper>
        </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>testtesttesttesttesttesttest
                    testtesttesttesttesttesttesttesttesttesttest</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>testtesttesttesttesttesttest
                    testtesttesttesttesttesttesttesttesttesttest</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>testtesttesttesttesttesttest
                    testtesttesttesttesttesttesttesttesttesttest</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>testtesttesttesttesttesttest
                    testtesttesttesttesttesttesttesttesttesttest</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>testtesttesttesttesttesttest
                    testtesttesttesttesttesttesttesttesttesttest</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>testtesttesttesttesttesttest
                    testtesttesttesttesttesttesttesttesttesttest</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>testtesttesttesttesttesttest
                    testtesttesttesttesttesttesttesttesttesttest</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>testtesttesttesttesttesttest
                    testtesttesttesttesttesttesttesttesttesttest</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>testtesttesttesttesttesttest
                    testtesttesttesttesttesttesttesttesttesttest</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>




            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <Button
                        variant="contained"
                        color="primary"
                        disableRipple
                        className={classNames(classes.margin, classes.bootstrapRoot)}
                    >
                        Bootstrap
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
            </Grid>

        </Grid>
    )
}


export default withStyles(styles)(myslider);