import React, { Component } from "react"
import Navigation from "./components/Navigation"
import Jumbotron from "./components/Jumbotron"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Jumbotron />
        {/* About Section */}
        {/* Projects Section */}
        {/* Contact Section */}
      </div>
    );
  }
}

export default App;
