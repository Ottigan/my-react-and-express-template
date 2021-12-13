import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Main from './views/main';

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Switch>
    </Router>
  );
}

export default App;
