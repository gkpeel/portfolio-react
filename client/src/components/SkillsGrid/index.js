import React from "react"
import { Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { MongoDB, Express, ReactJS, NodeLogo, WordPress, HTML, CSSLogo, JavascriptLogo, SASS, Bootstrap, jQuery, Java, PHP, Python, Heroku, MySQL, GoogleMaps, Git, XD, Photoshop, Illustrator, Premiere } from "../../util/logos.js"

const SkillsRow = styled(Row)`
    margin-bottom: 1.5rem;
`

const SkillsGrid = (props) => {
    return (
        <Col md={{ span: 5, offset: 1 }} >
            <h1>Skills</h1>
            <SkillsRow>
                <Col xs={3}>
                    <img src={MongoDB} alt="MongoDB Logo" className="img-fluid" />
                </Col>
                <Col xs={3}>
                    <img src={Express} alt="Express Logo" className="img-fluid" />
                </Col>
                <Col xs={3}>
                    <img src={ReactJS} alt="ReactJS Logo" className="img-fluid" />
                </Col>
                <Col xs={3}>
                    <img src={NodeLogo} alt="NodeJS Logo" className="img-fluid" />
                </Col>
            </SkillsRow>
            <Row>
                <Col xs={3}>
                    <img src={WordPress} alt="WordPress Logo" className="img-fluid" />
                </Col>
                <Col xs={3}>
                    <img src={HTML} alt="HTML 5 Logo" className="img-fluid" />
                </Col>
                <Col xs={3}>
                    <img src={CSSLogo} alt="CSS 3 Logo" className="img-fluid" />
                </Col>
                <Col xs={3}>
                    <img src={JavascriptLogo} alt="Javascript Logo" className="img-fluid" />
                </Col>
                <Col xs={12}></Col>
                <Col xs={3}>
                    <img src={SASS} alt="SASS Logo" className="img-fluid" />
                </Col>
                <Col xs={3}>
                    <img src={Bootstrap} alt="Bootstrap Logo" className="img-fluid" />
                </Col>
                <Col xs={3}>
                    <img src={jQuery} alt="jQuery Logo" className="img-fluid" />
                </Col>
                <Col xs={12}></Col>
                <Col xs={3}>
                    <img src={Heroku} alt="SASS Logo" className="img-fluid" />
                </Col>
                <Col xs={3}>
                    <img src={MySQL} alt="Bootstrap Logo" className="img-fluid" />
                </Col>
                <Col xs={3}>
                    <img src={GoogleMaps} alt="jQuery Logo" className="img-fluid" />
                </Col>
                <Col xs={3}>
                    <img src={Git} alt="jQuery Logo" className="img-fluid" />
                </Col>
                <Col xs={12}></Col>
                <Col xs={3}>
                    <img src={Java} alt="Java Logo" className="img-fluid" />
                </Col>
                <Col xs={3}>
                    <img src={Python} alt="Python Logo" className="img-fluid" />
                </Col>
                <Col xs={3}>
                    <img src={PHP} alt="PHP Logo" className="img-fluid" />
                </Col>
                <Col xs={12}></Col>
                <Col xs={3}>
                    <img src={XD} alt="Adobe XD Logo" className="img-fluid" />
                </Col>
                <Col xs={3}>
                    <img src={Photoshop} alt="Adobe Photoshop Logo" className="img-fluid" />
                </Col>
                <Col xs={3}>
                    <img src={Illustrator} alt="Adobe Illustrator Logo" className="img-fluid" />
                </Col>
                <Col xs={3}>
                    <img src={Premiere} alt="Adobe Premiere Logo" className="img-fluid" />
                </Col>
            </Row>
        </Col>
    )
}

export default SkillsGrid