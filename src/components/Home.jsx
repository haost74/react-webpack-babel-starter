import React from 'react';
import { hot } from 'react-hot-loader';
import Top from 'components/homeElements/Top';
import 'assets/scss/Home.scss';

class Home extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="grid-item">
                        <Top/>
                </div>
                <div className="grid-item">COROT-7d</div>
                <div className="grid-item"></div>           
            </div>
        );}
};

export default hot(module)(Home);