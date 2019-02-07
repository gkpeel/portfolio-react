import React from "react"

const Button = (props) => {
    return (
        <a href={props.to}>{props.children}</a>
    )
}

export default Button