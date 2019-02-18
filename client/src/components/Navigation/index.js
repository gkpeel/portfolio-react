import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"
import Logo from "../../img/portfolio-logo.svg"
import styled from "styled-components"
import "./index.css"

const PortfolioNavLink = styled(NavLink)`
    font-size: 1.25rem;
    font-family: "Permanent Marker", sans-serif;
    color: ${props => props.disabled ? "#6c757d" : "#ffffff"};
    cursor: ${props => props.disabled ? "default" : "pointer"};
    pointer-events: ${props => props.disabled ? "none" : "auto"}
    padding-top: 0.5px;
    padding-bottom: 0.5px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    &:last-of-type {
        padding-right: 0;
    }

    &:hover, &.active {
        color: #00FFFF;
    }

    &.active {
        text-decoration: underline;
    }

    &:hover {
        text-decoration: none;
    }
`

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
                bg="background-black"
                fixed="top"
                variant="dark"
                onToggle={this.toggleNavExpanded}
                expanded={this.state.navExpanded}
            >
                <Container fluid>
                    <Navbar.Brand>
                        <NavLink
                            exact to="/"
                            className="navbar-brand"
                            onClick={this.closeNav}
                        >
                            <img
                                src={Logo}
                                alt="Geoff Peel Portfolio Logo"
                                width="112px"
                                height="112px"
                            />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ml-auto">
                            <PortfolioNavLink to="/about" onClick={this.closeNav}>About</PortfolioNavLink>
                            <PortfolioNavLink to="/projects" onClick={this.closeNav}>Projects</PortfolioNavLink>
                            <PortfolioNavLink to="/resume" disabled onClick={this.closeNav}>Resume</PortfolioNavLink>
                            <PortfolioNavLink to="/blog" disabled onClick={this.closeNav}>Blog</PortfolioNavLink>
                            <PortfolioNavLink to="/contact" onClick={this.closeNav}>Contact</PortfolioNavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation