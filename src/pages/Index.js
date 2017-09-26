import React, { Component } from 'react';
import { Button, Segment, Header, Icon } from 'semantic-ui-react';

import { UserCard, RepoCard } from 'react-github-cards/dist/medium';
import 'react-github-cards/dist/medium.css';

import Pdf from '../img/resume.pdf';
import Profile from '../img/profile.pdf';
import PdfIcon from '../img/pdf.ico';
import LinkedinIcon from '../img/Linkedin.ico';

export class About extends Component {

    render() {
        return (
            <div>
                <Header as='h2' icon textAlign='center' className="fadeInRight animated">
                    <Icon name='home' circular />
                </Header>
                <Segment raised style={{ padding: "20px 0" }}>
                    <div className="fadeInRight animated" style={{ animationDelay: "0.3s" }}>
                        <UserCard username="knight3001" clientId="foo" clientSecret="bar" />
                    </div>

                    <div className="fadeInRight animated" style={{ animationDelay: "0.6s", marginTop: "20px" }}>
                        <Button size='huge' color='green' href={Pdf} target="_blank">
                            <img src={PdfIcon} className="icon-small" alt="PdfIcon" />
                            DOWNLOAD MY RESUME
                        </Button>
                    </div>
                    <div className="fadeInRight animated" style={{ animationDelay: "0.9s", marginTop: "20px" }}>
                        <Button size='huge' color='blue' href={Profile} target="_blank">
                            <img src={LinkedinIcon} className="icon-small" alt="LinkedInIcon" />
                            DOWNLOAD MY LINKEDIN PROFILE
                        </Button>
                    </div>
                </Segment>
            </div>
        )
    }
}

export default About;
