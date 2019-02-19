import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { Col } from "react-bootstrap"
import styled from "styled-components"
import Slides from "../../util/slides.js"
import ContentBox from "../ContentBox"
import CtaButton from "../CTAButton"

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
                <ContentBox>
                    <h2
                        style={{ textAlign: "center", marginBottom: "2rem" }}
                    >{this.state.slides[this.state.currentSlide].name}</h2>
                    <div>
                        {this.state.slides[this.state.currentSlide].details.map((paragraph) => (<p>{paragraph}</p>))}
                    </div>
                    <CtaButton to="/projects">See More Projects</CtaButton>
                    <NavLink to="/projects">See More Projects</NavLink>
                </ContentBox>
            </Col>
        )
    }
}

export default FeaturedProjectInfo