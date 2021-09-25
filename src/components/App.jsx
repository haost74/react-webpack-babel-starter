import React from 'react';
import { hot } from 'react-hot-loader';
import 'assets/scss/App.scss';
<<<<<<< HEAD
import Home from 'components/Home';
=======
>>>>>>> a2ca32b80a516e0c6d8abedb99495aa16020294d
import AboutPage from 'components/AboutPage';
import WelcomePage from 'components/WelcomePage';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
<<<<<<< HEAD
          <Home/>
          {/* <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
          </nav> */}
          {/* <hr /> */}
          {/* <Route exact path="/" component={WelcomePage} />
          <Route path="/about" component={AboutPage} /> */}
=======
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
          </nav>
          <hr />
          <Route exact path="/" component={WelcomePage} />
          <Route path="/about" component={AboutPage} />
>>>>>>> a2ca32b80a516e0c6d8abedb99495aa16020294d
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
