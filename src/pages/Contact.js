import React, { Component } from 'react';

import Github from '../img/github.png';
import Linkedin from '../img/linkedin.png';

export class Contact extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="fadeInRight animated">
                        <h3 className="title title-1">CONTACT ME</h3>
                        <div className="mail shake animated" style={{ animationDelay: "0.7s" }}>
                            <a href="mailto:terry@bneing.com?Subject=Contact%20Base" target="_top">terry@bneing.com</a>
                        </div>
                    </div>

                    <div className="fadeInRight animated" style={{ animationDelay: "0.3s" }}>
                        <h3 className="title title-1" >OR FIND ME ON</h3>
                    </div>

                    <span className="fadeInRight animated icon-big" style={{ animationDelay: "0.6s", marginRight: "20px"}} title="Github">
                        <a href="https://github.com/knight3001" target="_blank" rel="noopener noreferrer"><img src={Github} width="30" height="30" alt="Github Jump" /></a>
                    </span>

                    <span className="fadeInRight animated icon-big" style={{ animationDelay: "0.9s" }} title="LinkedIn">
                        <a href="https://www.linkedin.com/in/terry-xu-57bb3292/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} width="30" height="30" alt="LinkedIn Jump" /></a>
                    </span>
                </div>
            </div>
        )
    }
}

export default Contact;
