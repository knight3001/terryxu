import React, { Component } from 'react';
import { Header, Icon, Segment, Grid} from 'semantic-ui-react';

import ReactJpg from '../img/reactprac.jpg';
import TrendJpg from '../img/currencytrend.jpg';
import AngularJpg from '../img/angular2prac.jpg';
import BudingJpg from '../img/buding.jpg';
import IvfJpg from '../img/ivfids.jpg';
import PlatypusJpg from '../img/platypus.jpg';

import ReactGif from '../img/reactprac.gif';
import TrendGif from '../img/currencytrend.gif';
import AngularGif from '../img/angular2prac.gif';
import BudingGif from '../img/buding.gif';
import IvfGif from '../img/ivfids.gif';
import PlatypusGif from '../img/platypus.gif';

class Thumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "start"
        };
        this.toggle = this.toggle.bind(this);
        this.handleLoading = this.handleLoading.bind(this);
    }

    toggle() {
        if (this.state.status === "start") {
            this.setState({ status: "load" })
        }
        else {
            this.setState({ status: "start" })
        }
    }

    handleLoading() {
        if (this.state.status !== "start") {
            this.setState({ status: "play" })
        }
    }

    render() {
        let buf = [];
        const keywords = this.props.keywords;
        for (let i = 0; i < keywords.length; i++) {
            buf.push(<li className="active" key={i}>{keywords[i]}</li>)
        }

        const status = this.state.status;
        let css = "";
        if (status === "start") {
            css = "GifPlayer";
        }
        else if (status === "load") {
            css = "GifPlayer is-loading"
        }
        else {
            css = "GifPlayer is-playing"
        }
        return (
            <Grid.Column>
                <Segment piled className="fadeInUp animated" style={{ animationDelay: this.props.delay + "s" }}>
                    <div className="thumbnail">
                        <div className={css} onClick={() => this.toggle()}>
                            <img src={this.state.status === "start" ? this.props.jpg : this.props.gif} onLoad={this.handleLoading} alt={this.props.title} />
                        </div>
                        <div className="caption">
                            <Header as='h3' className="text-link">
                                <a href={this.props.url} target="_blank">{this.props.title}</a>
                            </Header>
                            <div className="detail">{this.props.description}</div>
                            <ol className="breadcrumb">
                                {buf}
                            </ol>
                            {this.props.git &&
                                <div className="code">
                                    <Icon name="github square" size='large' style={{verticalAlign: "text-bottom"}} />
                                    <a href={this.props.git} target="_blank" className="text-link">Code</a>
                                </div>
                            }
                        </div>
                    </div>
                </Segment>
            </Grid.Column>
        )
    }
}

class Work extends Component {
    render() {
        return (
            <div>
                <Header as='h2' icon textAlign='center' className="fadeInRight animated">
                    <Icon name='code' circular />
                    <Header.Content>
                        WHAT I HAVE DONE
                    </Header.Content>
                </Header>

                <Grid stackable columns={3} style={{marginTop: "20px"}}>
                    <Thumbnail
                        jpg={ReactJpg}
                        gif={ReactGif}
                        title="Gobang Game"
                        url="https://knight3001.github.io/ReactPrac/"
                        delay="0.1"
                        description="Gobang game, combat with AI, time travelling feature, try to find secret button to trigger easy mode."
                        keywords={["React", "Bootstrap", "Gulp"]}
                        git="https://github.com/knight3001/ReactPrac"
                    />
                    <Thumbnail
                        jpg={TrendJpg}
                        gif={TrendGif}
                        title="Currency Trend"
                        url="https://knight3001.github.io/CurrencyTrend/"
                        delay="0.3"
                        description="Track the latest Currency Exchange rate, based on USD, chart for historical year based data, redux practise."
                        keywords={["React", "D3", "Redux"]}
                        git="https://github.com/knight3001/CurrencyTrend"
                    />
                    <Thumbnail
                        jpg={AngularJpg}
                        gif={AngularGif}
                        title="Student Center"
                        url="https://knight3001.github.io/Angular2Prac/#/courses"
                        delay="0.5"
                        description="Students, courses, teachers information view and edit."
                        keywords={["Angular 2", "Bootstrap"]}
                        git="https://github.com/knight3001/Angular2Prac"
                    />
                </Grid>

                <Grid stackable columns={3}>
                    <Thumbnail
                        jpg={BudingJpg}
                        gif={BudingGif}
                        title="Buding Lab"
                        url="http://www.buding.com.au/almighty/index/brisbane/"
                        delay="0.7"
                        description="Pinterest style like social network system, clusttered with google map."
                        keywords={["Python", "Django", "Google Maps API", "OAuth"]}
                    />
                    <Thumbnail
                        jpg={IvfJpg}
                        gif={IvfGif}
                        title="City Fertility"
                        url="http://ivfids.platypus.net.au/workdesk/"
                        delay="0.9"
                        description="City fertility Center Internal System."
                        keywords={["VB Script", "VB.NET", "JQuery UI", "Bootstrap"]}
                    />
                    <Thumbnail
                        jpg={PlatypusJpg}
                        gif={PlatypusGif}
                        title="Platypus Network"
                        url="http://www.platypus.net.au/"
                        delay="1.1"
                        description="Platypus networks company website."
                        keywords={["VB.NET", "JQuery UI", "Bootstrap"]}
                    />
                </Grid>
            </div>
        )
    }
}

export default Work;
