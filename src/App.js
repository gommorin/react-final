import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
  <Router>
    <div>
        <Switch>
          <Route exact path="/">
            <h1>Hello World</h1>
          </Route>
          <Route path="/new-story">
            <h1>Hola New Story</h1>
          </Route>
          <Route path="/story">
            <h1>Hola Story</h1>
          </Route>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
