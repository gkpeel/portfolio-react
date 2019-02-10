import React from "react"
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap'
import Headshot from "../../img/transparent-headshot-portfolio-800h.png"
import "./index.css"

const cmy_hex_array = [
    "#00FFFF",
    "#FFFF00",
    "#FF00FF"
]

const selectRandColor = (colorArray) => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}

const randColor = selectRandColor(cmy_hex_array);

const Intro = () => {
    return (
        <Jumbotron fluid className="portfolio-jumbotron">
            <Container fluid>
                <Row>
                    <Col xs={{ span: 12, order: 2 }} sm={{ span: 6, order: 1 }} md={5}>
                        <div className="w-100">
                            <img src={Headshot} alt="Geoff Peel Headshot" className="img-fluid" />
                        </div>
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} sm={{ span: 6, order: 2 }} sm={true} order="1">
                        <div className="d-flex align-items-center h-100 text-right text-white">
                            <div className="w-100 jumbotron__introSection">
                                <div className="jumbotron__nameSection">
                                    <h1 className="mb-lg-3">Hi, I’m <span className="font--marker">Geoffrey Peel</span>.</h1>
                                    <h1 className="">Full-Stack Web Developer</h1>
                                </div>
                                <Button>See My Work</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Intro;