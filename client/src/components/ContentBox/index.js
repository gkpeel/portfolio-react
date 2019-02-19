import React from "react"
import styled from "styled-components"

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    padding: 3rem;
    box-shadow: 0px 16px 60px -15px #333;

    & > h1 {
        margin-bottom: 2.5rem;
    }
`

const ContentBox = (props) => {
    return (<ContentDiv {...props}>{props.children}</ContentDiv>)
}

export default ContentBox;