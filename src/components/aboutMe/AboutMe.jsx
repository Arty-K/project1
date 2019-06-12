import React, { Component } from 'react';
import PropTypes from "prop-types";
import ScrollableAnchor from 'react-scrollable-anchor';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import man_mobile from "../../imgs/man-mobile.svg";


const aboutMe = {
    titleText1: `Let's get acquainted`,
    titleText2: 'I am cool frontend developer',
    paragraphText1: `When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.`,
    paragraphText2: 'Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.'
};


export default class AboutMe extends Component {
    static propTypes = {
        aboutMe:PropTypes.object,
        TitleText1:PropTypes.string,
        TitleText2:PropTypes.string,
        paragraphText1:PropTypes.string,
        paragraphText2:PropTypes.string,
        man_mobile:PropTypes.object
    };

    render(){
        return(
            <>
                <Grid container id='aboutMe'>
                    <ScrollableAnchor id={'About me'}>
                        <div className='container'>

                            <Grid container spacing={24}>
                                <Grid item md={12}>
                                    <h2>{aboutMe.titleText1}</h2>
                                </Grid>
                            </Grid>
                            <Grid container spacing={24}>
                                <Grid item md={4} sm={12}>
                                    <img src={man_mobile} alt="man_mobile"/>
                                </Grid>
                                <Grid item md={8} sm={12}>
                                    <h3>{aboutMe.titleText2}</h3>
                                    <p className='p2'>{aboutMe.paragraphText1}</p>
                                    <p className='p2'>{aboutMe.paragraphText2}</p>
                                    <Button>
                                        {'Sign Up'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </ScrollableAnchor>
                </Grid>
            </>
        );
    }
}