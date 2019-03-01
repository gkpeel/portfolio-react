import React, { Component } from "react"
import { Col } from "react-bootstrap"
import Slides from "../../util/slides.js"
import ContentBox from "../ContentBox"
import CtaButton from "../CtaButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LinkDiv from "../LinkDiv/index.js";


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
                xs={{ span: 12, order: 2 }}
                md={{ span: 6, order: 1 }}
            >
                <ContentBox>
                    <h2
                        style={{ textAlign: "center", marginBottom: "2rem" }}
                    >{this.state.slides[this.state.currentSlide].name}</h2>
                    <div>
                        {this.state.slides[this.state.currentSlide].details.map((paragraph, i) => (<p key="{this.state.currentSlide}-{i}">{paragraph}</p>))}
                        <div className="w-75 mx-auto">
                            <LinkDiv link={this.state.slides[this.state.currentSlide].link} repo={this.state.slides[this.state.currentSlide].repo} />
                        </div>
                    </div>
                    <CtaButton width="100%" to="projects" icon="code">See More Projects</CtaButton>
                </ContentBox>
            </Col>
        )
    }
}

export default FeaturedProjectInfo