import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { Col } from "react-bootstrap"
import styled from "styled-components"
import Slides from "../../util/slides.js"

class FeaturedProjectInfo extends Component {
    state = {
        currentSlide: this.props.currentSlideIndex,
        slides: Slides
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ currentSlide: nextProps.currentSlideIndex });
    }

    render() {
        return (
            <Col
                xs={12}
                md={true}
            >
                <h2>{this.state.slides[this.state.currentSlide].name}</h2>
                <NavLink to="/projects">See More Projects</NavLink>
            </Col>
        )
    }
}

export default FeaturedProjectInfo