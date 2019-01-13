import React, { Component } from 'react';

export default class Banner extends Component {
    render(){

        const 
            titleText = 'Test assignment for Frontend Developer position',
            paragraphText = 'We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. ' + 
                              'Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!',
            buttonText = 'Sign Up';

        return(
            <div>
                <h1>
                    {titleText}
                </h1> 
                <h4>
                    {paragraphText}
                </h4>
                <button>
                    {buttonText}
                </button>
            </div>
        );
    }
}