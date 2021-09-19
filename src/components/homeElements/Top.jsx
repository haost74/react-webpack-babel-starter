import React from 'react';
import { hot } from 'react-hot-loader';
import 'assets/scss/Top.scss';
import reactLogo from 'assets/img/Logo1.svg';

class Top extends React.Component{
    render(){
        return(
            <div className="div-top">
                <img className="img-logo" src={reactLogo}  />
            </div>
        );
    }
};


export default hot(module)(Top);