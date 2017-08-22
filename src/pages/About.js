import React, { Component } from 'react';

import Pdf from '../img/resume.pdf';
import PdfIcon from '../img/pdf.ico';
import Photo from '../img/profile.jpg';

export class About extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="fadeInRight animated">
                        <h3 className="title title-1">ABOUT ME</h3>
                    </div>

                    <div className="fadeInRight animated" style={{ animationDelay: "0.3s" }}>
                        <div className="profile">
                            <div className="focus pic"><img src={Photo} width="300" height="300" /></div>
                            <div className="para para-1" >
                                Mr Xu is a Software Engineer with well-rounded programming skills and practical
                                knowledge in both back-end and front-end development. He is a hardworking and
                                quick learning employee with ability in completing any assigned development tasks
                                both independently and corporately with the team. He also has expert knowledge of
                                responsive development principals, UI/UX understanding, an eye for detail and
                                understanding of cross-browser/platform considerations.
                            </div>
                        </div>
                    </div>

                    <div className="fadeInRight animated" style={{ animationDelay: "0.6s", marginTop: "20px" }}>
                        <a href={Pdf} className="btn-default btn btn-1" target="_blank">
                            <img src={PdfIcon} width="18" height="18" className="icon-small" />
                            DOWNLOAD MY RESUME
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}

export default About;
