import React, { Component } from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';

import Github from '../img/github.png';
import Linkedin from '../img/linkedin.png';

export class Contact extends Component {

    render() {
        return (
            <div>
                <Header as='h2' icon textAlign='center' className="fadeInRight animated">
                    <Icon name='send' circular />
                    <Header.Content>
                        CONTACT ME
                    </Header.Content>
                </Header>

                <Segment raised>
                    <div className="fadeInRight animated" style={{ animationDelay: "0.3s" }}>
                        <span className="flat-filled" id="filled-email">
                            <svg className="flat_icon" xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100">
                                <path className="circle" d="M50,2.125c26.441,0,47.875,21.434,47.875,47.875c0,26.441-21.434,47.875-47.875,47.875C17.857,97.875,2.125,76.441,2.125,50C2.125,23.559,23.559,2.125,50,2.125z"></path>
                                <g className="icon">
                                    <path className="top" d="M76.162,35.079c1.113,0.731,1.113,1.917,0,2.647L52.013,53.615c-1.11,0.731-2.915,0.731-4.024,0l-24.15-15.889c-1.111-0.73-1.111-1.916,0-2.647l24.15-15.889c1.11-0.729,2.914-0.729,4.024,0L76.162,35.079z"></path>
                                    <path className="paper" d="M30.105,32.763h39.791v28.421H30.105V32.763z"></path>
                                    <path className="base" d="M23.003,36.404L50,54.165l26.997-17.761c0,0,0.006-0.667,0.006,1.688v27.002c0,2.354-1.91,4.264-4.264,4.264H27.262c-2.354,0-4.264-1.91-4.264-4.264V38.092C23,35.738,23.003,36.404,23.003,36.404z"></path>
                                    <path className="text" d="M36.145,38.27h27.71c0.199,0,0.357-0.16,0.357-0.356c0-0.195-0.158-0.355-0.357-0.355h-27.71c-0.197,0-0.355,0.16-0.355,0.355C35.788,38.11,35.947,38.27,36.145,38.27z M63.854,39.691H36.144c-0.197,0-0.355,0.159-0.355,0.356c0,0.196,0.158,0.355,0.355,0.355h27.711c0.197,0,0.357-0.16,0.357-0.355C64.211,39.849,64.053,39.691,63.854,39.691z M63.854,41.822H36.144c-0.197,0-0.355,0.161-0.355,0.356c0,0.197,0.158,0.355,0.355,0.355h27.711c0.197,0,0.357-0.158,0.357-0.355C64.211,41.982,64.053,41.822,63.854,41.822z"></path>
                                </g>
                            </svg>
                        </span>
                        <div className="mail shake animated text-link" style={{ animationDelay: "1.5s" }}>
                            <a href="mailto:terry@bneing.com?Subject=Contact%20Base" target="_top">terry@bneing.com</a>
                        </div>
                    </div>

                    <div className="fadeInRight animated" style={{ animationDelay: "0.6s" }}>
                        <Header as='h3' className="title-1" style={{margin: "20px 0"}}>OR FIND ME ON</Header>
                    </div>

                    <a href="https://github.com/knight3001" target="_blank" rel="noopener noreferrer">
                        <Icon name="github alternate" size="huge" className="fadeInRight animated" style={{ animationDelay: "0.9s", marginRight: "20px" }} />
                    </a>

                    <a href="https://www.linkedin.com/in/terry-xu-57bb3292/" target="_blank" rel="noopener noreferrer">
                        <Icon name="linkedin" size="huge" className="fadeInRight animated" style={{ animationDelay: "1.2s" }} />
                    </a>
                </Segment>
            </div>
        )
    }
}

export default Contact;
