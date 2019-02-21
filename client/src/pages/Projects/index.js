import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import styled from "styled-components"
import Section from "../../components/Section"
import ProjectCard from "../../components/ProjectCard"
import CtaButton from "../../components/CtaButton"
import QuizMap from "../../img/projects/quizmap-app.png"
import GazellesCoaches from "../../img/projects/gazelles-coaches-homepage-screenshot.png"
import BegsList from "../../img/projects/begs-list-screenshot.png"
import BaconCrazy from "../../img/projects/bacon-me-crazy.png"
import BurgerTown from "../../img/projects/burger-town-app.png"
import GutBuddies from "../../img/projects/survey-middle.png"
import MakeOrder from "../../img/projects/make-it-order-it.jpg"
import Marvel from "../../img/projects/marvel-trivia-game.png"
import Survey from "../../img/projects/survey-middle.png"
import WorldGuess from "../../img/projects/word-guess-game-display-image.png"
import ContentSubHeader from "../../components/ContentSubHeader"
import ContentHeader from "../../components/ContentHeader"
import ContentBox from "../../components/ContentBox";

const ListGroup = styled.ul`
    padding-left: 20px;
`

class Projects extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Section>

                <ContentHeader>Projects</ContentHeader>
                <Row className="mb-3 mb-lg-5">
                    <Col
                        xs={true}
                        lg={{ span: 8, offset: 2 }}
                        xl={{ span: 6, offset: 3 }}
                    >
                        <ContentBox>
                            <p>Below are some projects (both full-stack and front-end) that I’ve developed. Additionally, this portfolio is a full stack application that leverages the power of React with popular packages, like react-bootstrap, react-responsive-carousel, react-scroll, react-transition-group, and styled-components.</p>
                            <CtaButton to="/contact" icon="user-circle">Contact Me</CtaButton>
                        </ContentBox>
                    </Col>
                </Row>
                <Row className="row-eq-height">
                    <ProjectCard image={QuizMap} link="https://quizmap.herokuapp.com/" repo="https://github.com/gkpeel/quiZMap-react">
                        <ContentSubHeader>quiZMap</ContentSubHeader>
                        <ListGroup>
                            <li>Full Stack MERN App</li>
                            <li>React Front End</li>
                            <li>Bi-Directional flow between Timer and Overlay Screens</li>
                            <li>MongoDB Database containing GeoJSON Polygons</li>
                            <li>Used Google Map API to load items on correct guess</li>
                            <li><em>Future Refactoring: Redux Implementation</em></li>
                        </ListGroup>
                    </ProjectCard>
                    <ProjectCard image={GazellesCoaches} link="https://coaches.scalingup.com/">
                        <ContentSubHeader>Gazelles Coaches</ContentSubHeader>
                        <ListGroup>
                            <li>Custom WordPress Theme</li>
                            <li>Custom Taxonomies, Post Types, Fields</li>
                            <li>Private Login for Intranet Documents</li>
                        </ListGroup>
                    </ProjectCard>
                    <ProjectCard image={BegsList} link="https://stark-beach-71508.herokuapp.com/" repo="https://github.com/Anders-Engman/BegsList">
                        <ContentSubHeader>BegsList</ContentSubHeader>
                        <ListGroup>
                            <li>Full Stack MERN App</li>
                            <li>MySQL Database</li>
                            <li>BootStrap Front End</li>
                            <li>Implemented UpVote/DownVote logic tied to Users and Items for persistent data</li>
                            <li>Designed Front End Homepage, User Profiles, and Item Request with HandlebarsJS</li>
                        </ListGroup>
                    </ProjectCard>
                    <ProjectCard image={BaconCrazy} link="https://gkpeel.github.io/bacon-me-crazy/" repo="https://github.com/gkpeel/bacon-me-crazy">
                        <ContentSubHeader>Bacon Me Crazy</ContentSubHeader>
                        <ListGroup>
                            <li>React Front End</li>
                        </ListGroup>
                    </ProjectCard>
                    <ProjectCard image={BurgerTown} link="https://thawing-ravine-70081.herokuapp.com/" repo="https://github.com/gkpeel/burger-town">
                        <ContentSubHeader>BurgerTown</ContentSubHeader>
                        <ListGroup>
                            <li>Full Stack MERN App</li>
                            <li>MySQL Database</li>
                            <li>BootStrap Front End</li>
                            <li>Implemented UpVote/DownVote logic tied to Users and Items for persistent data</li>
                            <li>Designed Front End Homepage, User Profiles, and Item Request with HandlebarsJS</li>
                        </ListGroup>
                    </ProjectCard>
                    <ProjectCard image={Marvel} link="https://gkpeel.github.io/TriviaGame/" repo="https://github.com/gkpeel/TriviaGame">
                        <ContentSubHeader>Marvel Trivia Game</ContentSubHeader>
                        <ListGroup>
                            <li>jQuery Click Events</li>
                            <li>Timer Based Application</li>
                            <li>Giphy API</li>
                        </ListGroup>
                    </ProjectCard>
                    <ProjectCard image={GutBuddies} link="https://shielded-taiga-64792.herokuapp.com/" repo="https://github.com/gkpeel/friend-finder-app">
                        <ContentSubHeader>Gut Buddies</ContentSubHeader>
                        <ListGroup>
                            <li>jQuery Click Events</li>
                        </ListGroup>
                    </ProjectCard>
                    <ProjectCard image={MakeOrder} link="https://mhmeluskey.github.io/groupproject1/" repo="https://github.com/mhmeluskey/groupproject1">
                        <ContentSubHeader>Make-It or Order-It</ContentSubHeader>
                        <ListGroup>
                            <li>Bootstrap Front End</li>
                            <li>Google Map API </li>
                            <li>BootStrap Front End</li>
                        </ListGroup>
                    </ProjectCard>
                </Row>
            </Section>
        )
    }
}

export default Projects