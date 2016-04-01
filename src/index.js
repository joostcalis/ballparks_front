import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './App';
import BallparkList from './BallparkList';
import Ballpark from './Ballpark'
import PageNotFound from './PageNotFound';
import Dashboard from './Dashboard';
import Scoreboard from './Scoreboard';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/ballparks/:ballparkId" component={Ballpark}/>
      <Route path="/scoreboard" component={Scoreboard}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
), document.getElementById('root'));
