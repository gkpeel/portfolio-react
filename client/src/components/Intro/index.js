import React from "react"
import styled from "styled-components"
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap'
import Headshot from "../../img/transparent-headshot-portfolio-800h.png"
import CtaButton from "../CTAButton"

const cmy_hex_array = [
    "#00FFFF",
    "#FFFF00",
    "#FF00FF"
]
const selectRandColor = (colorArray) => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}
const randColor = selectRandColor(cmy_hex_array);

const IntroJumbotron = styled(Jumbotron)`    
    background-color: transparent;
    height: calc(100vh - 138px);
    padding-bottom: 0;
`
const IntroContainer = styled(Container)`
    height: 100%;
    position: relative;
`

const IntroRow = styled(Row)`
    @media(min-width: 768px) {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
`

const IntroHeader = styled.h1`
    @media(min-width: 1200px) {
        margin-bottom: 1rem;
        font-size: 4rem;
    }
`

const IntroSubHeader = styled.h1`
    margin-bottom: 2rem;
    @media(min-width: 1200px) {
        font-size: 3rem;
    }
`
const Intro = () => {
    return (
        <IntroJumbotron fluid>
            <IntroContainer fluid>
                <IntroRow className="">
                    <Col
                        xs={{ span: 12, order: 2 }}
                        md={{ span: 6, order: 1 }}
                        lg={5}
                    >
                        <div className="w-100 h-100">
                            <img src={Headshot} alt="Geoff Peel Headshot" className="img-fluid" />
                        </div>
                    </Col>
                    <Col
                        sm={true}
                        xs={{ span: 12, order: 1 }}
                        md={{ span: 6, order: 2 }}
                        lg={true}
                    >
                        <div className="d-flex align-items-center h-100 text-right text-white">
                            <div className="w-100">
                                <div>
                                    <IntroHeader>Hi, I’m <span className="font--marker">Geoffrey Peel</span>.</IntroHeader>
                                    <IntroSubHeader>Full-Stack Web Developer</IntroSubHeader>
                                </div>
                                <CtaButton to="featured-work">See My Work</CtaButton>
                            </div>
                        </div>
                    </Col>
                </IntroRow>
            </IntroContainer>
        </IntroJumbotron>
    )
}

export default Intro;