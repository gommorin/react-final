import './App.css';

// Páginas
import Home from './pages/Home'
import Story from './pages/Story'

// React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
  <Router>
    <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/new-story">
            <h1>Hola New Story</h1>
          </Route>
          <Route path='/story' component={Story} />
        </Switch>
    </div>
  </Router>
  );
}

export default App;
