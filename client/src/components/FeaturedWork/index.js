import React, { Component } from "react"
import { Row } from "react-bootstrap"
import Section from "../Section"
import FeaturedProjectInfo from "../FeaturedProjectInfo"
import FeaturedProjectCarousel from "../FeaturedProjectCarousel"

class FeaturedWork extends Component {

    state = {
        carouselImg: null
    }

    componentDidMount() {
        this.setState({ carouselImg: null })
    }


    render() {
        return (
            <Section id="featured-work">
                <Row>
                    <FeaturedProjectInfo />
                    <FeaturedProjectCarousel />
                </Row>
            </Section>
        )
    }
}

export default FeaturedWork