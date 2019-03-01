import React from "react"
import { Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { MongoDB, Express, ReactJS, NodeLogo, WordPress, HTML, CSSLogo, JavascriptLogo, SASS, Bootstrap, jQuery, Java, PHP, Python, Heroku, MySQL, GoogleMaps, Git, XD, Photoshop, Illustrator, Premiere } from "../../util/logos.js"
import ContentSubHeader from "../ContentSubHeader/index.js";
import ContentHeader from "../ContentHeader/index.js";

const SkillsRow = styled(Row)`
    margin-bottom: 1.5rem;
    border-bottom: 2px solid #333;
    padding-bottom: 1.5rem;

    [class*=' col-']:nth-child(-n+5) {
        margin-bottom: 1.25rem;
    }

    &:last-of-type {
        border-bottom: none;
    }

    @media(min-width: 1200px) {
        padding-bottom: 2.5rem;
        margin-bottom: 2.5rem;
    }
`

const SkillsLogo = styled.img`
    max-height: 100px;
    width: 100%;
`

const SkillsGrid = (props) => {
    return (
        <Col md={{ span: 5, offset: 1 }}>
            <ContentHeader paddingTop="3rem">Skills</ContentHeader>
            <SkillsRow>
                <Col xs={12}>
                    <ContentSubHeader>MERN Stack</ContentSubHeader>
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={MongoDB} alt="MongoDB Logo" className="img-fluid" />
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={Express} alt="Express Logo" className="img-fluid" />
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={ReactJS} alt="ReactJS Logo" className="img-fluid" />
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={NodeLogo} alt="NodeJS Logo" className="img-fluid" />
                </Col>
            </SkillsRow>
            <SkillsRow>
                <Col xs={12}>
                    <ContentSubHeader>CSS</ContentSubHeader>
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={CSSLogo} alt="CSS 3 Logo" className="img-fluid" />
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={SASS} alt="SASS Logo" className="img-fluid" />
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={Bootstrap} alt="Bootstrap Logo" className="img-fluid" />
                </Col>
            </SkillsRow>
            <SkillsRow>
                <Col xs={12}>
                    <ContentSubHeader>JS</ContentSubHeader>
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={JavascriptLogo} alt="Javascript Logo" className="img-fluid" />
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={jQuery} alt="jQuery Logo" className="img-fluid" />
                </Col>
            </SkillsRow>
            <SkillsRow>
                <Col xs={12}>
                    <ContentSubHeader>Other</ContentSubHeader>
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={HTML} alt="HTML 5 Logo" className="img-fluid" />
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={WordPress} alt="WordPress Logo" className="img-fluid" />
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={MySQL} alt="MySQL Logo" className="img-fluid" />
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={GoogleMaps} alt="GoogleMaps Logo" className="img-fluid" />
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={Git} alt="Git Logo" className="img-fluid" />
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={Heroku} alt="Heroku Logo" className="img-fluid" />
                </Col>
            </SkillsRow>
            <SkillsRow>
                <Col xs={12}>
                    <ContentSubHeader>Languages</ContentSubHeader>
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={Java} alt="Java Logo" className="img-fluid" />
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={Python} alt="Python Logo" className="img-fluid" />
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={PHP} alt="PHP Logo" className="img-fluid" />
                </Col>
            </SkillsRow>
            <SkillsRow>
                <Col xs={12}>
                    <ContentSubHeader>Design</ContentSubHeader>
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={XD} alt="Adobe XD Logo" className="img-fluid" />
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={Photoshop} alt="Adobe Photoshop Logo" className="img-fluid" />
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={Illustrator} alt="Adobe Illustrator Logo" className="img-fluid" />
                </Col>
                <Col xs={3} className="d-flex">
                    <SkillsLogo src={Premiere} alt="Adobe Premiere Logo" className="img-fluid" />
                </Col>
            </SkillsRow>
        </Col>
    )
}

export default SkillsGrid