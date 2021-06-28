import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Main from './views/main';

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Switch>
          <Route exact path="/" component={() => <Main text="Hello World!" />} />
        </Switch>
      </Switch>
    </Router>
  );
}

export default App;
