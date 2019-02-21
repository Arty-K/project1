import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap/lib/';
import './footer.css';
import facebook from '../../icons/facebook.svg';
import linkedin from '../../icons/linkedin.svg';
import instagram from '../../icons/instagram.svg';
import twitter from '../../icons/twitter.svg';
import pinterest from '../../icons/pinterest.svg';
import logo from '../../logo/logo.svg';
import mail from '../../icons/mail.svg';
import phone1 from '../../icons/phone.svg';
import phone2 from '../../icons/cellphone.svg';


export default class Footer extends Component {
    render(){
        const topics_list =
            {
                topic_list_1: ['News','Blog','Partners','Shop'],
                topic_list_2: ['Overview','Design','Code','Collaborate'],
                topic_list_3: ['Tutorials','Resources','Guides','Examples'],
                topic_list_4: ['FAQ','Terms','Conditions','Help']
            };
        const footerCopyright = '© abz.agency specially for the test task';

        return(
            <div className="container footer">
                <div className="row">
                    <img src={logo} alt="logo"/>
                    buttons
                </div>
                <hr/>
                <div className="row">
                    <div className="col-4">
                        <ul>
                            <li>
                                <img src={mail} alt=""/>
                                <span>work.of.future@gmail.com</span>
                            </li>
                            <li>
                                <img src={phone1} alt=""/>
                                <span>+38 (050) 789 24 98</span>
                            </li>
                            <li>
                                <img src={phone2} alt=""/>
                                <span>+38 (095) 556 08 45</span>
                            </li>
                        </ul>
                    </div>

                    <div className="col-2">
                        {topics_list.topic_list_1.map(item => <li key={item}>{item}</li>)}
                    </div>
                    <div className="col-2">
                        {topics_list.topic_list_2.map(item => <li key={item}>{item}</li>)}
                    </div>
                    <div className="col-2">
                        {topics_list.topic_list_3.map(item => <li key={item}>{item}</li>)}
                    </div>
                    <div className="col-2">
                        {topics_list.topic_list_4.map(item => <li key={item}>{item}</li>)}
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        {footerCopyright}
                    </div>
                    <div className="col-8">
                        <img src={facebook} alt="facebook"/>
                        <img src={linkedin} alt="linkedin"/>
                        <img src={instagram} alt="instagram"/>
                        <img src={twitter} alt="twitter"/>
                        <img src={pinterest} alt="pinterest"/>
                    </div>
                </div>

            </div>
        );
    }
}