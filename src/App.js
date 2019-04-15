import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import "./App.css"
import Nav from "./components/Nav";
import Home from "./pages/Home"
import About from './pages/About';
import Contact from './pages/Contact';
import Apps from './pages/Apps';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        < Nav />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/apps" component={Apps} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
