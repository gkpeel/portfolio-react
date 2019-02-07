import React from "react";
import { NavLink } from "react-router-dom"
import Logo from "../../img/portfolio-logo.svg";

const style = {
    navigation__logo: {
        width: "112px",
        height: "112px",
        paddingLeft: "15px"
    }
}

const Navigation = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-md">
            <div className="">
                <NavLink exact to="/" className="navbar-brand">
                    <img src={Logo} alt="Geoff Peel Portfolio Logo" style={style.navigation__logo} />
                </NavLink>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#portfolioNav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="portfolioNav">
                <div className="navbar-nav ml-auto">
                    {/* <NavLink /> */}
                    <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                    <NavLink to="/projects" className="nav-item nav-link">Projects</NavLink>
                    <NavLink to="/resume" className="nav-item nav-link disabled">Resume</NavLink>
                    <NavLink to="/blog" className="nav-item nav-link disabled">Blog</NavLink>
                    <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;