import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import { Button } from "react-bootstrap"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CTA_Link = styled(Link)`
    display: inline-block;
    width: 100%;
    margin-bottom: 1rem;
    border-color: #00FFFF;
    border: 1px solid transparent;
    border-radius: .25rem;
    background-color: #00FFFF;
    padding: 0.5rem 1rem;
    text-align: center;
    color: rgb(20,20,25) !important;
    font-family: "Permanent Marker", sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    text-decoration: none;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    line-height: 1.5;
    transition: color .15s ease-in-out,
                background-color .15s ease-in-out,
                border-color .15s ease-in-out,
                box-shadow .15s ease-in-out;

    & .cta-arrow {
        transition: transform 300ms ease-out;
    }

    &:hover {
        color: rgba(255, 255, 255, 1) !important;
        background-color: rgba(0, 255, 255, 0.9);
        border-color: rgba(0, 255, 255, 0.2);
        text-decoration: none;

        & .cta-arrow {
            transform: rotate(90deg);
        }
    }

    @media(min-width:991px) {
        width: 66%;
        padding: 0.5rem 1rem;
        font-size: 2rem;
    }

    @media(min-width: 1280px) {
        width: 50%;
        padding: 0.5rem 1rem;
    }
`

const CtaButton = (props) => {
    return (
        <CTA_Link
            activeClass="active"
            to={props.to}
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
        >
            {props.children} <FontAwesomeIcon className="cta-arrow" icon="angle-double-right" />
        </CTA_Link>
    )
}

export default CtaButton