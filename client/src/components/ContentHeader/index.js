import React from "react"
import styled from "styled-components"

const HeadingContent = styled.h1`
    margin-bottom: 1.5rem;
    text-decoration: underline;
    text-align: center;
    padding-top: ${(props) => props.paddingTop || "0"};
`;

const ContentHeader = (props) => {
    return (<HeadingContent {...props}>{props.children}</HeadingContent>)
}

export default ContentHeader