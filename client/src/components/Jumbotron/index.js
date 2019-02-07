import React from "react";
import Headshot from "../../img/transparent-headshot-portfolio-full2.png";

const style = {
    jumbotron__headshot: {
    },
    jumbotron__name: {
        color: "#00FFFF"
    }
}

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <img src={Headshot} alt="Geoff Peel Headshot" className="img-fluid" />
                    </div>
                    <div className="col-md-8 text-right text-white">
                        <h1 className="display-1">Hi, I’m <span style={style.jumbotron__name}>Geoffrey Peel.</span></h1>
                        <h1 className="display-4">Full-Stack Web Developer</h1>
                        <a href="#projects" className="btn btn-lg">See My Work</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;