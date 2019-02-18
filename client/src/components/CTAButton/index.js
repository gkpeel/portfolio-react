import React from "react"
import { Button } from "react-bootstrap"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CTA_Button = styled(Button)`
    width: 100%;
    border-width: 6px;
    background-color: #00FFFF;
    border-color: #00FFFF;
    padding: 1rem 3rem;
    font-family: "Permanent Marker", sans-serif;
    font-size: 2rem;
    color: rgb(20,20,25);

    & .cta-arrow {
        transition: transform 300ms;
    }

    &:hover {
        background-color: rgba(0, 255, 255, 0.9);
        border-color: rgba(0, 255, 255, 0.2);

        & .cta-arrow {
            transform: rotate(90deg);
        }
    }

    @media(min-width:991px) {
        width: 66%;
    }

    @media(min-width: 1280px) {
        width: 50%;
    }
`

const CTAButton = (props) => {
    return (
        <CTA_Button href={props.to}>{props.children} <FontAwesomeIcon className="cta-arrow" icon="angle-double-right" /></CTA_Button>
    )
}

export default CTAButton