import React, { Component } from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Switch, Route, Link } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import NoMatch from "./pages/NoMatch"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Route component={NoMatch} />
                {/* About Section */}
                {/* Projects Section */}
                {/* Contact Section */}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    );
  }
}

export default App;
