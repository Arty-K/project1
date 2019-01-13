import React, { Component } from 'react';

export default class Footer extends Component {
    render(){
        const contacts_list =
            [
                'work.of.future@gmail.com',
                '+38 (050) 789 24 98',
                '+38 (095) 556 08 45'
            ];
        const topics_list =
            {
                topic_list_1: ['News','Blog','Partners','Shop'],
                topic_list_2: ['Overview','Design','Code','Collaborate'],
                topic_list_3: ['Tutorials','Resources','Guides','Examples'],
                topic_list_4: ['FAQ','Terms','Conditions','Help']
            };
        const footerCopyright = '© abz.agency specially for the test task';
        return(
            <div className="container">
                <div className="row">
                    logo
                    buttons
                </div>
                <hr/>
                <div className="row">
                    <div className="col-4">
                        <ul>
                            {contacts_list.map(item => <li key={item}>{item}</li>)}
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
                        icons
                    </div>
                </div>



            </div>
        );
    }
}