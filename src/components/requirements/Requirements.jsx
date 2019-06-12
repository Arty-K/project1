import React, { Component } from 'react';
import PropTypes from "prop-types";
import ScrollableAnchor from 'react-scrollable-anchor';
import Grid from "@material-ui/core/Grid";
import man_laptop_v1 from "../../imgs/man-laptop-v1.svg";


const requirements = {
    titleText1: 'General requirements for the test task',
    paragraphText1: 'Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.',
    paragraphText2: `If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.`,
    paragraphText3 :'Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.'
};


export default class Requirements extends Component {
    static propTypes = {
        requirements:PropTypes.object,
        titleText1:PropTypes.string,
        paragraphText1:PropTypes.string,
        paragraphText2:PropTypes.string,
        paragraphText3:PropTypes.string,
        man_laptop_v1:PropTypes.object
    };

    render(){
        return(
            <>
                <Grid container id="requirements">
                    <ScrollableAnchor id={'Requirements'}>
                        <div className='container'>
                            <Grid container>
                                <Grid item sm={12}>
                                    <h2>
                                        {requirements.titleText1}
                                    </h2>
                                </Grid>
                            </Grid>
                            <Grid container spacing={32}>
                                <Grid item sm={6} xs={12} className='requirementsText'>
                                    <p className="p2">{requirements.paragraphText1}</p>
                                    <p className="p2">{requirements.paragraphText2}</p>
                                    <p className="p2">{requirements.paragraphText3}</p>
                                </Grid>
                                <Grid item sm={6} xs={12} className='man-laptop-v1'>
                                    <img
                                        src={man_laptop_v1}
                                        alt=""
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </ScrollableAnchor>
                </Grid>
            </>
        );
    }
}