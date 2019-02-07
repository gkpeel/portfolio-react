import React from "react";
import Headshot from "../../img/transparent-headshot-portfolio-full2.png";

const style = {
    jumbotron: {
        height: "100vh",
        position: "relative"
    },
    jumbotronFullBottom: {
        height: "100%",
        bottom: "0"
    },
    jumbotronRowBottom: {
        position: "absolute",
        bottom: "0",
        marginRight: "0"
    },
    jumbotron__headshot: {
    },
    jumbotron__name: {
        color: "#00FFFF"
    }
}

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid bg-transparent" style={style.jumbotron}>
            <div className="container-fluid" style={style.jumbotronFull}>
                <div className="row" style={style.jumbotronRowBottom}>
                    <div className="col-md-5">
                        <img src={Headshot} alt="Geoff Peel Headshot" className="img-fluid" />
                    </div>
                    <div className="col-md text-right text-white">
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