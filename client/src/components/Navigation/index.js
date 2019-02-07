import React from "react";
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
        <nav className="navbar navbar-expand-md">
            <div className="">
                <a className="navbar-brand" href="#top">
                    <img src={Logo} alt="Geoff Peel Portfolio Logo" style={style.navigation__logo} />
                </a>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#portfolioNav" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="portfolioNav">
                <div className="navbar-nav">
                    <a href="#about" className="nav-item nav-link">About</a>
                    <a href="/projects" className="nav-item nav-link">Projects</a>
                    <a href="/resume" className="nav-item nav-link disabled">Resume</a>
                    <a href="/blog" className="nav-item nav-link disabled">Blog</a>
                    <a href="/contact" className="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;