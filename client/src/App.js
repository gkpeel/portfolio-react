import React, { Component } from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import "./App.css"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          {/* About Section */}
          {/* Projects Section */}
          {/* Contact Section */}
        </div>
      </Router>

    );
  }
}

export default App;
