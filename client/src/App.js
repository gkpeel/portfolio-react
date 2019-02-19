// import React
import React, { Component } from "react"

// import React Transition Group
import { TransitionGroup, CSSTransition } from "react-transition-group"

// import React Router
import { Switch, Route } from "react-router-dom"

// import Bootstrap, Styled Components, Fonts, and CSS Transitions
import { Container } from "react-bootstrap"
import styled from "styled-components"
import "./App.css"

// import FontAwesome Library/build Library
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

// import Navigation and Pages
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import NoMatch from "./pages/NoMatch"
import "./App.css"

library.add(faAngleDoubleRight)

const Page = styled.div`
  position: absolute;
  top: 138px;
  left: 0;
  right: 0;
  color: #FFFFFF;
`
const PortfolioContainer = styled(Container)`
  max-width: 1920px;
  padding-left: 32px;
  padding-right: 32px;
`

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
              <Page>
                <PortfolioContainer fluid>
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NoMatch} />
                  </Switch>
                </PortfolioContainer>
              </Page>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    );
  }
}

export default App;
