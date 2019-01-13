import React, { Component } from 'react';

export default class SignUp extends Component {
    render(){
        const
            title_1 = '',
            title_2 = '',
            buttonText = 'Sign Up';
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {title_1}
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        {title_2}
                    </div>
                </div>

                <div className="row input-group">
                    <div className="col-4">
                        <input type="text"/>
                    </div>
                    <div className="col-4">
                        <input type="text"/>
                    </div>
                    <div className="col-4">
                        <input type="text"/>
                    </div>
                </div>

                <div className="row input-group">
                    <div className="col-6">
                        <input type="text"/>
                    </div>
                    <div className="col-6">

                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="inputGroupFile04"/>
                                    <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
                            </div>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">Button</button>
                            </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <button>
                            {buttonText}
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}