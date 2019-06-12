import React, { Component } from 'react';
import PropTypes from "prop-types";
import ScrollableAnchor from 'react-scrollable-anchor';
import Grid from '@material-ui/core/Grid';
import html from '../../imgs/html.svg';
import css from '../../imgs/css.svg';
import javascript from '../../imgs/javascript.svg';


const relationships = {
    titleText1: 'About my relationships with web-development',
    columnTitle1: `I'm in love with HTML`,
    columnTitle2: 'CSS is my best friend',
    columnTitle3: 'JavaScript is my passion',
    columnText1: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.',
    columnText2: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
    columnText3: 'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.'
};


export default class Relationships extends Component {
    static propTypes = {
        relationships:PropTypes.object,
        titleText1:PropTypes.string,
        columnTitle1:PropTypes.string,
        columnText1:PropTypes.string,
        titleText2:PropTypes.string,
        columnTitle2:PropTypes.string,
        columnText2:PropTypes.string,
        titleText3:PropTypes.string,
        columnTitle3:PropTypes.string,
        columnText3:PropTypes.string,
    };

    render(){
        return(
            <>
                <Grid container id='relationship'>
                    <ScrollableAnchor id={'Relationships'}>
                        <div className='container'>
                            <Grid container spacing={24}>
                                <Grid item md/>
                                <Grid item md={8}>
                                    <h2>
                                        {relationships.titleText1}
                                    </h2>
                                </Grid>
                                <Grid item md/>
                            </Grid>
                            <Grid container spacing={32} className='images'>
                                <Grid item md={4} sm={12}>
                                    <img
                                        src={html}
                                        alt="html"
                                    />
                                    <h3>
                                        {relationships.columnTitle1}
                                    </h3>
                                    <p className="p2">
                                        {relationships.columnText1}
                                    </p>
                                </Grid>
                                <Grid item md={4} sm={12}>
                                    <img
                                        src={css}
                                        alt="css"
                                    />
                                    <h3>
                                        {relationships.columnTitle2}
                                    </h3>
                                    <p className="p2">
                                        {relationships.columnText2}
                                    </p>
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <img
                                        src={javascript}
                                        alt="javascript"
                                    />
                                    <h3>
                                        {relationships.columnTitle3}
                                    </h3>
                                    <p className="p2">
                                        {relationships.columnText3}
                                    </p>
                                </Grid>
                            </Grid>
                        </div>
                    </ScrollableAnchor>
                </Grid>
            </>
        );
    }
}