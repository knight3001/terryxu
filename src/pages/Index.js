import React, { Component } from 'react';

import { UserCard, RepoCard } from 'react-github-cards/dist/medium';
import 'react-github-cards/dist/medium.css';

import Pdf from '../img/resume.pdf';
import Profile from '../img/profile.pdf';
import PdfIcon from '../img/pdf.ico';
import LinkedinIcon from '../img/Linkedin.ico';

export class About extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="fadeInRight animated" style={{ animationDelay: "0.3s"}}>
                        <UserCard username="knight3001" clientId="foo" clientSecret="bar" />
                    </div>

                    <div className="fadeInRight animated" style={{ animationDelay: "0.6s", marginTop: "20px" }}>
                        <a href={Pdf} className="btn-default btn btn-1" target="_blank">
                            <img src={PdfIcon} width="18" height="18" className="icon-small" alt="PdfIcon" />
                            DOWNLOAD MY RESUME
                        </a>
                    </div>
                    <div className="fadeInRight animated" style={{ animationDelay: "0.9s", marginTop: "20px" }}>
                        <a href={Profile} className="btn-default btn btn-2" target="_blank">
                            <img src={LinkedinIcon} width="18" height="18" className="icon-small" alt="LinkedInIcon" />
                            DOWNLOAD MY LINKEDIN PROFILE
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
