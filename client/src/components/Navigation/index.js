import React, { Component } from "react";
import { NavLink } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../img/portfolio-logo.svg";
import "./index.css"

class Navigation extends Component {

    state = {
        navExpanded: false
    }

    toggleNavExpanded = () => {
        let switchNavVal = !this.state.navExpanded
        this.setState({ navExpanded: switchNavVal })
    }

    closeNav = () => {
        this.setState({ navExpanded: false })
    }

    render() {
        return (
            <Navbar
                expand="md"
                bg="transparent"
                fixed="top"
                variant="dark"
                onToggle={this.toggleNavExpanded}
                expanded={this.state.navExpanded}
            >
                <Navbar.Brand>
                    <NavLink
                        exact to="/"
                        className="navbar-brand"
                        onClick={this.closeNav}
                    >
                        <img
                            src={Logo}
                            alt="Geoff Peel Portfolio Logo"
                            className="navigation__logo"
                        />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <NavLink to="/about" className="nav-item nav-link" onClick={this.closeNav}>About</NavLink>
                        <NavLink to="/projects" className="nav-item nav-link" onClick={this.closeNav}>Projects</NavLink>
                        <NavLink to="/resume" className="nav-item nav-link disabled" onClick={this.closeNav}>Resume</NavLink>
                        <NavLink to="/blog" className="nav-item nav-link disabled" onClick={this.closeNav}>Blog</NavLink>
                        <NavLink to="/contact" className="nav-item nav-link" onClick={this.closeNav}>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation