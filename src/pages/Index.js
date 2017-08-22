import React, { Component } from 'react';

import { UserCard, RepoCard } from 'react-github-cards/dist/medium';
import 'react-github-cards/dist/medium.css';

export class About extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <UserCard username="knight3001" clientId="foo" clientSecret="bar" />

                    <script src="//platform.linkedin.com/in.js" type="text/javascript"></script>
                    <script type="IN/MemberProfile" data-id="https://www.linkedin.com/in/terry-xu-57bb3292" data-format="inline" data-related="false"></script>
                </div>
            </div>
        )
    }
}

export default About;
