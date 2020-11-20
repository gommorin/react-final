import "./App.css";
// import Author from '../src/components/Author'
// Páginas
import Home from "./pages/Home";
import Story from "./pages/Story";
import NewStory from "./pages/NewStory";

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/new-story" component={NewStory} />
          <Route path="/story" component={Story} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
