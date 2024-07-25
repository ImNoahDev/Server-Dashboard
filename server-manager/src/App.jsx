import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ServerDetail from './components/ServerDetail';
import AddServer from './components/AddServer';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/servers/:id" component={ServerDetail} />
      <Route path="/" component={AddServer} />
    </Switch>
  </Router>
);

export default App;
