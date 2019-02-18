import React from "react"
import { Col } from "react-bootstrap"
import styled from "styled-components"

const AboutCopy = (props) => {
    return (
        <Col md={{ span: 6 }}>
            <h1>About</h1>
            <p>Full stack developer with a passion for solving problems and creating engaging UI designs.</p>
            <p>Whether on an algorithmic or architectural level, it is the challenges that inevitably arise while building applications make being a web developer enjoyable. The problem solving that goes into receiving that hit of dopamine isn’t for everyone, but it is for me.</p>
            <p>And although we might not be building tangible products, utilizing these skills as a developer has given me the opportunity to create applications that impact users in ways both trivial and profound. I’m excited to extend this passion to a company full-time in the near future.</p>
        </Col>
    )
}

export default AboutCopy