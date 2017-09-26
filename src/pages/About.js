import React, { Component } from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';

import Photo from '../img/profile.jpg';

export class About extends Component {

    render() {
        return (
            <div>
                <Header as='h2' icon textAlign='center' className="fadeInRight animated">
                    <Icon name='id card' circular />
                    <Header.Content>
                        ABOUT ME
                    </Header.Content>
                </Header>

                <Segment secondary  className="fadeInRight animated profile" style={{ animationDelay: "0.3s" }}>
                    <div className="focus pic"><img src={Photo} width="300" height="300" alt="Profile" /></div>
                    <div className="para-1" >
                        Mr Xu is a Software Engineer with well-rounded programming skills and practical
                                knowledge in both back-end and front-end development. He is a hardworking and
                                quick learning employee with ability in completing any assigned development tasks
                                both independently and corporately with the team. He also has expert knowledge of
                                responsive development principals, UI/UX understanding, an eye for detail and
                                understanding of cross-browser/platform considerations.
                    </div>
                </Segment>
            </div>
        )
    }
}

export default About;
