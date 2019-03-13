import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

export default class Users extends Component {
    render(){
        /*anchor setting to fit sticky header*/
        configureAnchors({offset: -70, scrollDuration: 600});
        return(
            {/*<Container>
                /!*anchor id for header buttons*!/
                <ScrollableAnchor id={'users'}>
                    <Row>
                        <Col lg={12}>
                            <h3>

                            </h3>
                        </Col>
                    </Row>
                </ScrollableAnchor>
            </Container>*/}
        );
    }
}