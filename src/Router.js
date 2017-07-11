import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

const BaseUrl = "";

const ListItemLink = ({ to, text }) => (
    <Route exact path={to} children={({ match }) => (
        <li role="presentation" className={match ? 'active' : ''}>
            <Link to={to}>{text}</Link>
        </li>
    )} />
)

class BasicRouter extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="header col-md-4 col-md-offset-4">
                        <ul className="nav nav-pills">
                            <ListItemLink to={BaseUrl + "/"} text="About" />
                            <ListItemLink to={BaseUrl + "/work"} text="Work" />
                            <ListItemLink to={BaseUrl + "/contact"} text="Contact" />
                        </ul>
                    </div>
                    <div className="clear"></div>

                    <Route exact path={BaseUrl + "/"} component={About} />
                    <Route path={BaseUrl + "/work"} component={Work} />
                    <Route path={BaseUrl + "/contact"} component={Contact} />
                </div>
            </Router>
        )
    }
}

export default BasicRouter;