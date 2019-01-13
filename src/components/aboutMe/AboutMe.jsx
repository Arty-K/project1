import React, { Component } from 'react';

export default class AboutMe extends Component {
    render(){
        const 
            title_1 = 'Let`s get acquainted',
            title_2 = 'I am cool frontend developer',
            paragraph_1 = 'When real users have a slow experience on mobile, they`re much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.',
            paragraph_2 = 'Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.';


        return(
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src="" alt=""/>
                    </div>
                    <div className="col-8">
                        <h3>
                            {title_1}
                        </h3>
                        <h4>
                            {title_2}
                        </h4>
                        <p>
                            {paragraph_1}
                        </p>
                        <p>
                            {paragraph_2}
                        </p>
                        <button>text</button>
                    </div>

                </div>

            </div>
        );
    }
}