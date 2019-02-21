import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyleNavLink = styled(NavLink)`
    display: inline-block;
    width: 100%;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
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
    cursor: pointer;
    transition: color .15s ease-in-out,
                background-color 300ms ease-in-out,
                border-color 300ms ease-in-out,
                box-shadow 300ms ease-in-out;

    & .cta-icon {
        margin-left: 0.5rem;
        transition: transform 300ms ease-out;
    }

    &:hover {
        color: rgba(255, 255, 255, 1) !important;
        background-color: rgba(0, 255, 255, 0.9);
        border-color: rgba(0, 255, 255, 0.2);
        text-decoration: none;

        & .cta-icon {
            transform: scale(1.15);
        }
    }

    @media(min-width:991px) {
        padding: 0.5rem 1rem;
        font-size: 2rem;
    }

    @media(min-width: 1280px) {
        padding: 0.5rem 1rem;
    }
`

const CtaButton = (props) => {
    return (
        <div className="mt-auto">
            <StyleNavLink to={props.to}>{props.children} <FontAwesomeIcon className="cta-icon" icon={props.icon} /></StyleNavLink>
        </div>
    )
}

export default CtaButton