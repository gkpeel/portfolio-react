import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import Section from "../../components/Section"

class Resume extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Section>
                <Row>
                    <Col>
                        <h1>Resume</h1>
                    </Col>
                </Row>
            </Section>
        )
    }
}

export default Resume