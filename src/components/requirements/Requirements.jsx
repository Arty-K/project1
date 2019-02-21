import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap/lib/';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import man_laptop_v2 from '../../imgs/man-laptop-v2.svg';

export default class Requirements extends Component {
    render(){
        const
            title = 'General requirements for the test task',
            paragraph_1 = 'Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.',
            paragraph_2 = 'If you`re a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.',
            paragraph_3 = 'Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.';

        /*anchor setting to fit sticky header*/
        configureAnchors({offset: -70, scrollDuration: 600});

        return(
            <Container>
                {/*anchor id for header buttons*/}
                <ScrollableAnchor id={'requirements'}>
                    <Row>
                        <Col lg={12}>
                                <h3>
                                    {title}
                                </h3>
                        </Col>
                    </Row>
            </ScrollableAnchor>

                <Row>
                    <Col lg={12}>
                        <p>
                            {paragraph_1}
                        </p>
                        <p>
                            {paragraph_2}
                        </p>
                        <p>
                            {paragraph_3}
                        </p>
                    </Col>

                    <Col lg={12}>
                        <img src={man_laptop_v2} alt="man-laptop-v2"/>
                    </Col>
                </Row>
                
            </Container>
        );
    }
}