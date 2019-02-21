import React from "react"
import { Col } from "react-bootstrap"
import ContentBox from "../ContentBox"
import CtaButton from "../CtaButton"

const AboutCopy = (props) => {
    return (
        <Col md={{ span: 6 }}>
            <ContentBox HeaderName="About">
                <div style={{ height: "500px", display: "flex", flexDirection: "column" }}>
                    <p>Full stack developer with a passion for solving problems and creating engaging UI designs.</p>
                    <p>Whether on an algorithmic or architectural level, it is the challenges that inevitably arise while building applications make being a web developer enjoyable. The problem solving that goes into receiving that hit of dopamine isn’t for everyone, but it is for me.</p>
                    <p>And although we might not be building tangible products, utilizing these skills as a developer has given me the opportunity to create applications that impact users in ways both trivial and profound. I’m excited to extend this passion to a company full-time in the near future.</p>
                    <CtaButton to="/contact" icon="user-circle">Contact Me</CtaButton>
                </div>
            </ContentBox>
        </Col>
    )
}

export default AboutCopy