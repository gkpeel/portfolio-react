import React from "react"
import styled from "styled-components"

const DivSection = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    
    @media(min-width: 992px) {
        margin-bottom: ${props => props.marginTop || "5rem"};
        margin-top: ${props => props.marginBottom || "5rem"};
    }
`

const Section = (props) => {
    return (
        <DivSection {...props}>{props.children}</DivSection>
    )
}

export default Section