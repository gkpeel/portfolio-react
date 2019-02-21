import React from "react"
import styled from "styled-components"
import ContentHeader from "../ContentHeader"

const ContentDiv = styled.div`
    height: 100%;
    margin-bottom: 2.5rem;
    border: 1px solid #333;
    display: flex;
    flex-direction: column;
    background-color: #000;
    padding: 1rem;
    box-shadow: 0px 16px 60px -15px #333;

    @media(min-width: 768px) {
        padding: 2rem;
    }

    @media(min-width: 992px) {
        padding: 3rem;
    }
`

const ContentBox = props => {
    return (
        <ContentDiv {...props}>
            {props.HeaderName ? <ContentHeader>{props.HeaderName}</ContentHeader> : null}
            {props.children}
        </ContentDiv>
    )
}

export default ContentBox;