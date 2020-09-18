import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Game from './Game';
import NotFound from './NotFound';
import WelcomeScreen from './WeclomeScreen';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomeScreen} ></Route>
        <Route path="/games/:gameId">
          <Game />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
