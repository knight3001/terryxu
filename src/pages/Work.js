import React, { Component } from 'react';

import ReactJpg from '../img/reactprac.jpg';
import TrendJpg from '../img/currencytrend.jpg';
import AngularJpg from '../img/angular2prac.jpg';
import BudingJpg from '../img/buding.jpg';
import IvfJpg from '../img/ivfids.jpg';
import PlatypusJpg from '../img/platypus.jpg';

class Thumbnail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="thumb-pad fadeInUp animated" style={{animationDelay: this.props.delay + "s"}}>
                    <div className="thumbnail">
                        <img src={this.props.jpg} alt={this.props.title}/>
                        <div className="caption">
                            <h4>{this.props.title}</h4>
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Work extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="fadeInRight animated">
                        <h3 className="title title-1">WHAT I HAVE DONE</h3>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="row">
                        <Thumbnail
                            jpg = {ReactJpg}
                            title = "Gobang Game"
                            delay = "0.1"
                            description = "No matter the problem, we have the team to fix it. Talk to our friendly support personnel today."
                        />
                        <Thumbnail
                            jpg = {TrendJpg}
                            title = "Currency Trend"
                            delay = "0.3"
                            description = "No matter the problem, we have the team to fix it. Talk to our friendly support personnel today."
                        />
                        <Thumbnail
                            jpg = {AngularJpg}
                            title = "Student Center"
                            delay = "0.5"
                            description = "No matter the problem, we have the team to fix it. Talk to our friendly support personnel today."
                        />
                    </div>

                    <div className="row">
                        <Thumbnail
                            jpg = {BudingJpg}
                            title = "Buding Lab"
                            delay = "0.7"
                            description = "No matter the problem, we have the team to fix it. Talk to our friendly support personnel today."
                        />
                        <Thumbnail
                            jpg = {IvfJpg}
                            title = "City Fertility"
                            delay = "0.9"
                            description = "No matter the problem, we have the team to fix it. Talk to our friendly support personnel today."
                        />
                        <Thumbnail
                            jpg = {PlatypusJpg}
                            title = "Platypus Network"
                            delay = "1.1"
                            description = "No matter the problem, we have the team to fix it. Talk to our friendly support personnel today."
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Work;