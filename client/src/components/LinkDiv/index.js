import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledDiv = styled.div`
    display: flex;
    margin-top: 2rem;
    margin-bottom: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
    justify-content: space-around;
    align-content: center;

    @media(min-width: 768px) {
        margin-top: 3rem;
    }
`

const LinkDiv = (props) => {
    return (
        <StyledDiv>
            <a href={props.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="eye" size="3x" /></a>
            {props.repo ? <a href={props.repo} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} size="3x" /></a> : null}
        </StyledDiv>
    )
}

export default LinkDiv;