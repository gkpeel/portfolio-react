import React from "react"
import styled from "styled-components"

const HeadingContent = styled.h1`
    margin-bottom: 1.5rem;
    text-decoration: underline;
    text-align: center;
`

const ContentHeader = (props) => {
    return (<HeadingContent>{props.children}</HeadingContent>)
}

export default ContentHeader