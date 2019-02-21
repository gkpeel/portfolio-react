import React from "react"
import styled from "styled-components"

const SubHeading = styled.h3`
    margin-bottom: 2rem;
`

const ContentSubHeader = (props) => {
    return (<SubHeading>{props.children}</SubHeading>)
}

export default ContentSubHeader;