import React, { Component } from "react"
import { Row } from "react-bootstrap"
import Section from "../../components/Section"
import AboutCopy from "../../components/AboutCopy"
import SkillsGrid from "../../components/SkillsGrid"

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Section>
                <Row>
                    <AboutCopy />
                    <SkillsGrid />
                </Row>
            </Section>
        )
    }
}

export default About