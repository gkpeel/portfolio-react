import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Carousel } from "react-responsive-carousel"
import BegsList from "../../img/projects/begs-list-screenshot.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const style = {
    section: {
        marginTop: "5rem",
        marginBotton: "5rem"
    },
    col: {
        padding: "0 16px"
    }
}

const FeaturedWork = () => {
    return (
        <section style={style.section}>
            <Row>
                <Container fluid>
                    <Carousel>
                        <div>
                            <img src="../../img/projects/begs-list-screenshot.png" alt="Beg's List Project Screengrab" />
                            <h1>Hello World</h1>
                        </div>
                        <div>
                            <img src={BegsList} alt="Beg's List Project Screenshot" />
                            <h1>Hello Universe</h1>
                        </div>
                    </Carousel>
                </Container>
            </Row>
        </section>
    )
}

export default FeaturedWork