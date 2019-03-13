import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import html from '../../imgs/html.svg';
import css from '../../imgs/css.svg';
import javascript from '../../imgs/javascript.svg';


const styles = theme => ({
    root: {
        flexGrow: 1
    }
});


class Relationships extends Component {
    render(){
        const classes = this.props.classes;
        const 
            title_1 = 'About my relationships with web-development',
            column_title_1 = 'I`m in love with HTML',
            column_title_2 = 'CSS is my best friend',
            column_title_3 = 'JavaScript is my passion',
            column_text_1 = 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.',
            column_text_2 = 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
            column_text_3 = 'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.';

        /*anchor setting to fit sticky header*/
        configureAnchors({offset: -70, scrollDuration: 600});

        return(
            <div className={classes.root}>
                <Grid container spacing={24}>
                {/*anchor id for header buttons*/}
                <ScrollableAnchor id={'relationships'}>
                    <Grid item xs={12}>
                        <h3>{title_1}</h3>
                    </Grid>
                </ScrollableAnchor>

                <Grid item xs={4}>
                    <img src={html} alt="html"/>
                    <h4>
                        {column_title_1}
                    </h4>
                    <p>
                        {column_text_1}
                    </p>
                </Grid>
                <Grid item xs={4}>
                    <img src={css} alt="css"/>
                    <h4>
                        {column_title_2}
                    </h4>
                    <p>
                        {column_text_2}
                    </p>
                </Grid>
                <Grid item xs={4}>
                    <img src={javascript} alt="javascript"/>
                    <h4>
                        {column_title_3}
                    </h4>
                    <p>
                        {column_text_3}
                    </p>
                </Grid>
                </Grid>

            </div>
        );
    }
}
export default withStyles(styles)(Relationships);