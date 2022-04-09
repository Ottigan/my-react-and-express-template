import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import Main from './views/main';

function App() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
