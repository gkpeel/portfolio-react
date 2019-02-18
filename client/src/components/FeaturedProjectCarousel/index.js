import React, { Component } from "react"
import { Col } from "react-bootstrap"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"
import Slides from "../../util/slides.js"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./index.css"

const CarouselTitle = styled.h3`
    font-family: "Permanent Marker", sans-serif;
`

class FeaturedProjectCarousel extends Component {
    state = {
        slides: Slides
    }

    buildCarousel = () => {
        return this.state.slides.map((slide, i) => {
            return (
                <div key={i}>
                    <img src={slide.img} alt={slide.alt} />
                    <CarouselTitle>{slide.name}</CarouselTitle>
                </div>
            )
        })
    }

    render() {
        return (
            <Col
                xs={12}
                md={6}
            >
                <Carousel
                    selectedItem={this.props.currentSlideIndex}
                    onChange={(newIndex) => {
                        this.props.setCurrentSlideIndex(newIndex)
                    }}
                >
                    {this.buildCarousel()}
                </Carousel>
            </Col>
        )
    }
}

export default FeaturedProjectCarousel