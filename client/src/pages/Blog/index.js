import React from "react"
import { Row, Col } from "react-bootstrap"
import Section from "../../components/Section"
import ContentHeader from "../../components/ContentHeader"
import ContentBox from "../../components/ContentBox"
import CtaButton from "../../components/CtaButton"

const Blog = () => {
    return (
        <Section>
            <ContentHeader>Blog - (Coming Soon)</ContentHeader>
            <Row>
                <Col
                    xs={true}
                    lg={{ span: 8, offset: 2 }}
                    xl={{ span: 6, offset: 3 }}
                >
                    <ContentBox>
                        <div>
                            <p>In order to make this portfolio a full stack application, I'm working on coding a basic custom CMS. It will help to familiarize myself with User Authentication as well as allow me to continue practicing API calls. Eventually this section will load post previews and individual posts.</p>
                            <p>Their content will be a brief assortment of things I’m watching (<a href="https://www.netflix.com/title/80189221" target="_blank" rel="noopener noreferrer">The Haunting of Hill House</a>, <a href="https://www.netflix.com/title/80186863" style={{ color: "#FFFF00" }} target="_blank" rel="noopener noreferrer">The Umbrella Academy</a>), eating, using to code (Styled Components), and all around experiencing in Philadelphia, PA.</p>
                            <p>Check back in the future or feel free to reach out to me</p>
                        </div>
                        <CtaButton to="contact" icon="user-circle">Contact Me</CtaButton>
                    </ContentBox>
                </Col>
            </Row>
        </Section>
    )
}

export default Blog