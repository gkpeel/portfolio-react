import React, { Component } from "react"
import { Row } from "react-bootstrap"
import Section from "../Section"
import FeaturedProjectInfo from "../FeaturedProjectInfo"
import FeaturedProjectCarousel from "../FeaturedProjectCarousel"

class FeaturedWork extends Component {

    state = {
        currentSlideIndex: 0
    }

    setCurrentSlideIndex = (carouselSlideIndex) => {
        console.log(carouselSlideIndex)
        this.setState({ currentSlideIndex: carouselSlideIndex })
    }

    render() {
        return (
            <Section id="featured-work">
                <Row>
                    <FeaturedProjectInfo
                        currentSlideIndex={this.state.currentSlideIndex}
                    />
                    <FeaturedProjectCarousel
                        currentSlideIndex={this.state.currentSlideIndex}
                        setCurrentSlideIndex={this.setCurrentSlideIndex}
                    />
                </Row>
            </Section>
        )
    }
}

export default FeaturedWork