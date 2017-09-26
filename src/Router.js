import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import {
    Container,
    Icon, Image,
    Menu, Sidebar,
    Responsive, Segment
} from "semantic-ui-react";

import Index from './pages/Index';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Logo from './img/logo.png';

const BaseUrl = "";

const ListItemLink = ({ to, text, icon }) => (
    <Route exact path={to} children={({ match }) => (
        <Menu.Item as={Link} to={to} name={text} className={match ? 'active' : ''}>
            {icon &&
                <Icon name={icon} />
            }
            {text}
        </Menu.Item>
    )} />
)

const LogoLink = () => (
    <Menu.Item>
        <a className="navbar-brand" href={BaseUrl + "/"}>
            <img src={Logo} alt="Logo" width="150" height="50" />
        </a>
    </Menu.Item>
)

class NavbarDesktop extends Component {
    render() {
        return (
            <div>
                <Menu fixed="top" inverted>
                    <Container>
                        <LogoLink />
                        <ListItemLink to={BaseUrl + "/about"} text="About" />
                        <ListItemLink to={BaseUrl + "/work"} text="Work" />
                        <ListItemLink to={BaseUrl + "/contact"} text="Contact" />
                    </Container>
                </Menu>
                <PageContent />
            </div>
        )
    }
}

class NavbarMobile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Items = [
            <ListItemLink to={BaseUrl + "/about"} text="About" key="About" icon="id card" />,
            <ListItemLink to={BaseUrl + "/work"} text="Work" key="Work" icon="code" />,
            <ListItemLink to={BaseUrl + "/contact"} text="Contact" key="Contact" icon="send" />
        ];
        return (
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    animation="overlay"
                    icon="labeled"
                    inverted
                    items={Items}
                    vertical
                    visible={this.props.visible}
                />
                <Sidebar.Pusher
                    dimmed={this.props.visible}
                    onClick={this.props.onPusherClick}
                    style={{ minHeight: "80vh" }} >
                    <Menu fixed="top" inverted>
                        <LogoLink />
                        <Menu.Item onClick={this.props.onToggle}>
                            <Icon name="sidebar" />
                        </Menu.Item>
                    </Menu>
                    <PageContent />
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        )
    }
}

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.handlePusher = this.handlePusher.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handlePusher() {
        const visible = this.state.visible;
        if (visible) {
            this.setState({ visible: false })
        };
    }

    handleToggle() {
        this.setState({ visible: !this.state.visible });
    }

    render() {
        return (
            <div>
                <Responsive {...Responsive.onlyMobile}>
                    <NavbarMobile
                        onPusherClick={this.handlePusher}
                        onToggle={this.handleToggle}
                        visible={this.state.visible}
                    />
                </Responsive>
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <NavbarDesktop />
                </Responsive>
            </div>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <Container className="footer">
                <p>© Terry Xu 2017</p>
            </Container>
        )
    }
}

class PageContent extends Component {
    render() {
        return (
            <Container className="wrapper">
                <Route exact path={BaseUrl + "/"} component={Index} />
                <Route path={BaseUrl + "/about"} component={About} />
                <Route path={BaseUrl + "/work"} component={Work} />
                <Route path={BaseUrl + "/contact"} component={Contact} />
            </Container>
        )
    }
}

class BasicRouter extends Component {
    render() {
        const history = createBrowserHistory();
        return (
            <Router history={history}>
                <div className="App">
                    <Navbar />
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default BasicRouter;
