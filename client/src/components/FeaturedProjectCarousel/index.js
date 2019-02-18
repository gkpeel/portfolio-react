import React, { Component } from "react"
import { Col } from "react-bootstrap"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"
import BegsList from "../../img/projects/begs-list-screenshot.png"
import QuizMap from "../../img/projects/quizmap-app.png"
import GazellesCoaches from "../../img/projects/gazelles-coaches-homepage-screenshot.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const CarouselTitle = styled.h3`
    font-family: "Permanent Marker", sans-serif;
`

class FeaturedProjectCarousel extends Component {
    state = {

    }

    render() {
        return (
            <Col
                xs={12}
                md={6}
            >
                <Carousel>
                    <div>
                        <img src={QuizMap} alt="quiZMap Screengrab" />
                        <CarouselTitle>quiZMap</CarouselTitle>
                    </div>
                    <div>
                        <img src={BegsList} alt="Beg's List Screegrab" />
                        <CarouselTitle>Beg's List</CarouselTitle>
                    </div>
                    <div>
                        <img src={GazellesCoaches} alt="Gazelles Coaches Screengrab" />
                        <CarouselTitle>Gazelles Coaches</CarouselTitle>
                    </div>
                </Carousel>
            </Col>
        )
    }
}

export default FeaturedProjectCarousel