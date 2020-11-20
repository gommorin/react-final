import "./App.css";

// Páginas
import Home from "./pages/Home";
import Story from "./pages/Story";
import NewStory from "./pages/NewStory";
import NavBar from "./Components/NavBar"

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
          <Route path="/navbar" component={NavBar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
