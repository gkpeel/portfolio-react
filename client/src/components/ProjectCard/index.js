import React from "react"
import { Row, Col } from "react-bootstrap"
import styled from "styled-components"
import ContentBox from "../../components/ContentBox"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Proj = styled(Col)`
    margin-bottom: 2rem;
`

const LinkDiv = styled.div`
    display: flex;
    margin-top: 3rem;
    padding-left: 3rem;
    padding-right: 3rem;
    justify-content: space-around;
    align-content: center;
`

const ProjectCard = (props) => {
    return (

        <Proj
            xs={12}
            md={6}
        >
            <ContentBox>
                <Row>
                    <Col
                        xs={{ span: 12, order: 2 }}
                        sm={{ span: 6, order: 1 }}
                        md={{ span: 12, order: 2 }}
                        lg={{ span: 6, order: 1 }}
                    >
                        <p>{props.children}</p>
                    </Col>
                    <Col
                        xs={{ span: 12, order: 1 }}
                        sm={{ span: 6, order: 2 }}
                        md={{ span: 12, order: 1 }}
                        lg={{ span: 6, order: 2 }}
                    >
                        <img className="img-fluid" src={props.image} alt="Project Screen Shot" />
                        <LinkDiv>
                            <a href={props.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="eye" size="3x" /></a>
                            {props.repo ? <a href={props.repo} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} size="3x" /></a> : null}
                        </LinkDiv>
                    </Col>
                </Row>
            </ContentBox>
        </Proj>
    )
}

export default ProjectCard