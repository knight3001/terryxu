import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Index from './pages/Index';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Logo from './img/logo.png';

const BaseUrl = "";

const ListItemLink = ({ to, text }) => (
    <Route exact path={to} children={({ match }) => (
        <li role="presentation" className={match ? 'active' : ''}>
            <Link to={to}>{text}</Link>
        </li>
    )} />
)

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navCollapsed: true
        }
        this.onToggleNav = this.onToggleNav.bind(this);
        this.closeToggleNav = this.closeToggleNav.bind(this);
    }

    onToggleNav() {
        this.setState({ navCollapsed: !this.state.navCollapsed });
    }

    closeToggleNav() {
        if (this.state.navCollapsed === false) {
            this.setState({ navCollapsed: true });
        }
    }

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation" onMouseLeave={this.closeToggleNav}>
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" onClick={this.onToggleNav}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href={BaseUrl + "/"}>
                            <img src={Logo} alt="Logo" width="150" height="50" />
                        </a>
                    </div>

                    <div className={(this.state.navCollapsed ? 'collapse' : '') + ' navbar-collapse'}>
                        <ul className="nav navbar-nav">
                            <ListItemLink to={BaseUrl + "/about"} text="About" />
                            <ListItemLink to={BaseUrl + "/work"} text="Work" />
                            <ListItemLink to={BaseUrl + "/contact"} text="Contact" />
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p>© Terry Xu 2017</p>
            </footer>
        )
    }
}

class BasicRouter extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />

                    <Route exact path={BaseUrl + "/"} component={Index} />
                    <Route path={BaseUrl + "/about"} component={About} />
                    <Route path={BaseUrl + "/work"} component={Work} />
                    <Route path={BaseUrl + "/contact"} component={Contact} />

                    <Footer />
                </div>
            </Router>
        )
    }
}

export default BasicRouter;