import React from "react";
import Headshot from "../../img/transparent-headshot-portfolio-800h.png";
import Button from "../Button"

const cmy_hex_array = [
    "#00FFFF",
    "#FFFF00",
    "#FF00FF"
]

const selectRandColor = (colorArray) => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}

const randColor = selectRandColor(cmy_hex_array);

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
    jumbotron__introSection: {
        paddingRight: "3rem"
    },
    jumbotron__nameSection: {
        marginBottom: "3rem"
    },
    jumbotron__name: {
        color: randColor,
        fontFamily: "'Permanent Marker', sans-serif"
    },
    jumbotron__CTA: {
        fontFamily: "'Permanent Marker', sans-serif",
        fontSize: "2.5rem",
        display: "block",
        width: "50%",
        marginLeft: "auto",
        marginTop: "3rem",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        paddingRight: "3rem",
        paddingLeft: "3rem",
        borderRadius: ".3rem",
        backgroundColor: randColor,
        color: "rgb(20,20,25)",
        textAlign: "center",
        verticalAlign: "middle",
        lineHeight: "1.5",
        cursor: "pointer"
    },
    markerFont: {
        fontFamily: "'Permanent Marker', sans-serif"
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
                    <div className="col-md text-right text-white d-flex align-items-center">
                        <div style={style.jumbotron__introSection}>
                            <div style={style.jumbotron__nameSection}>
                                <h1 className="display-1 mb-lg-3">Hi, I’m <span style={style.jumbotron__name}>Geoffrey Peel</span>.</h1>
                                <h1 className="display-4">Full-Stack Web Developer</h1>
                            </div>
                            <a href="#projects" className="" style={style.jumbotron__CTA}>See My Work</a>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Jumbotron;