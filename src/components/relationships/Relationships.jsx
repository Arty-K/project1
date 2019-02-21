import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import html from '../../imgs/html.svg';
import css from '../../imgs/css.svg';
import javascript from '../../imgs/javascript.svg';

export default class Relationships extends Component {
    render(){
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
            <div className="container">

                {/*anchor id for header buttons*/}
                <ScrollableAnchor id={'relationships'}>
                    <div className="row">
                        <div className="col-12">
                            <h3>{title_1}</h3>
                        </div>
                    </div>
                </ScrollableAnchor>

                <div className="row">
                    <div className="col-lg-4">
                        <img src={html} alt="html"/>
                        <h4>
                            {column_title_1}
                        </h4>
                        <p>
                            {column_text_1}
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <img src={css} alt="css"/>
                        <h4>
                            {column_title_2}
                        </h4>
                        <p>
                            {column_text_2}
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <img src={javascript} alt="javascript"/>
                        <h4>
                            {column_title_3}
                        </h4>
                        <p>
                            {column_text_3}
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}