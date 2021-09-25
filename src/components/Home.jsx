import React from 'react';
import { hot } from 'react-hot-loader';
import Top from 'components/homeElements/Top';
import 'assets/scss/Home.scss';

import configureStore from '../store/createStore';
import {toggleContactForm,
    handleInputChange} from '../actions';

const store = configureStore();

class Home extends React.Component {


    render() {
        return (
            <div className="wrapper">
                <div className="grid-item">
                        <Top/>
                </div>
                <div className="grid-item"><Top/></div>
                <div className="grid-item"><Top/></div>           
            </div>
        );}
};

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(toggleContactForm());
store.dispatch(toggleContactForm());
store.dispatch(handleInputChange('email', 'manjunath@example.com'))

unsubscribe;

export default hot(module)(Home);