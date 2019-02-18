import React from "react"
import { Row } from "react-bootstrap"
import AboutCopy from "../../components/AboutCopy"
import SkillsGrid from "../../components/SkillsGrid"
import styled from "styled-components"

const About = () => {
    return (
        <div>
            <Row>
                <AboutCopy />
                <SkillsGrid />
            </Row>
        </div>
    )
}

export default About