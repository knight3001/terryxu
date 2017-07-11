import React, { Component } from 'react';
import { ScrollPage, Section } from 'react-scrollpage';

class Layout extends Component {
    render() {

        const options = {
            curPage: 1,           // inital page number, most 1
            totalPage: 4,         // totoal page number
            delay: 1200           // delay between two scoll animation
        }

        return (
            <ScrollPage
                {...options}
            >
                <Section>
                    <div id="page1">
                        Page1
                    </div>
                </Section>
                <Section id="page2">
                    <div id="page2">
                        Page2
                    </div>
                </Section>
                <Section id="page4">
                    <div id="page3">
                        Page3
                    </div>
                </Section>
                <Section id="page4">
                    <div id="page4">
                        Page4
                    </div>
                </Section>
            </ScrollPage>
        )
    }
}

export default Layout;