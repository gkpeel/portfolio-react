import React, { Component } from "react"
import { Row } from "react-bootstrap"
import Section from "../../components/Section"
import AboutCopy from "../../components/AboutCopy"
import SkillsGrid from "../../components/SkillsGrid"
import styled from "styled-components"

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <Section>
                    <Row>
                        <AboutCopy />
                        <SkillsGrid />
                    </Row>
                </Section>
            </div>
        )
    }
}

export default About