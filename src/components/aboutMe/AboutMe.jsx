import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import man_laptop_v1 from '../../imgs/man-mobile.svg';

const styles = theme => ({
    root: {
        flexGrow: 1
    }
});

class AboutMe extends Component {
    render(){
        const classes = this.props.classes;
        const
            title_1 = 'Let`s get acquainted',
            title_2 = 'I am cool frontend developer',
            paragraph_1 = 'When real users have a slow experience on mobile, they`re much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.',
            paragraph_2 = 'Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.',
            buttonText = 'Sign Up';

        /*anchor setting to fit sticky header*/
        configureAnchors({offset: -70, scrollDuration: 600});

        return(
            <div className={classes.root}>
                <Grid container spacing={24}>
                {/*anchor id for header buttons*/}
                <ScrollableAnchor id={'about me'}>
                    <Grid item xs={4}>
                            <img src={man_laptop_v1} alt="man-laptop-v1"/>
                    </Grid>
                </ScrollableAnchor>
                    <Grid item xs={8}>
                            <h3>
                                {title_1}
                            </h3>
                            <h4>
                                {title_2}
                            </h4>
                            <p>
                                {paragraph_1}
                            </p>
                            <p>
                                {paragraph_2}
                            </p>
                         <Button variant="contained" color="secondary" className={classes.button}>{buttonText}</Button>
                    </Grid>

                </Grid></div>
        );
    }
}
export default withStyles(styles)(AboutMe);