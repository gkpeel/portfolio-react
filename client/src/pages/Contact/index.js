import React from "react"
import { Row, Col } from "react-bootstrap"
import Section from "../../components/Section"
import ContentHeader from "../../components/ContentHeader"
import ContentBox from "../../components/ContentBox"
import ContactForm from "../../components/ContactForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
    return (
        <Section>
            <Row>
                <Col xs={12}>
                    <ContentHeader>Contact</ContentHeader>
                </Col>
                <Col
                    md="5"
                    xl="6"
                >
                    <ContactForm />
                </Col>
                <Col
                    md="7"
                    xl="6"
                >
                    <ContentBox>
                        <h3 style={{ marginBottom: "2rem" }}>Want to say hello or reach out to work together on a project?</h3>
                        <Row>
                            <Col
                                xs="12"
                                lg="6"
                            >
                                <h4 className="text-center mb-4">Email<br /><a href="mailto:gkpeel@gmail.com">gkpeel@gmail.com</a></h4>
                            </Col>
                            <Col
                                xs="12"
                                lg="6"
                            >
                                <h4 className="text-center mb-4">Phone<br /><a href="tel:9088124012">908.812.4012</a></h4>
                            </Col>
                        </Row>
                        <div className="mt-auto mx-auto w-75 d-flex justify-content-around">
                            <a href="https://www.linkedin.com/in/geoffpeel/" className="d-block" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" /></a>
                            <a href="https://www.instagram.com/gkpeel/?hl=en" className="d-block" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} size="3x" /></a>
                        </div>
                    </ContentBox>
                </Col>
            </Row>
        </Section>
    )
}

export default Contact