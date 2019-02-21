import React from "react"
import { Row, Col } from "react-bootstrap"
import Section from "../../components/Section"
import ContentBox from "../../components/ContentBox"
import ContactForm from "../../components/ContactForm"


const Contact = () => {
    return (
        <Section>
            <Row>
                <Col>
                    <ContactForm />
                </Col>
                <Col>
                    <ContentBox HeaderName="Contact">
                        <div>
                            <p>Email: <a href="mailto:gkpeel@gmail.com">gkpeel@gmail.com</a></p>
                            <p>Phone: <a href="tel:9088124012">908.812.4012</a></p>
                        </div>
                    </ContentBox>
                </Col>
            </Row>
        </Section>
    )
}

export default Contact