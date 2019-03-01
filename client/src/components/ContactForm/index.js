import React, { Component } from "react"
import { Form, FormGroup, Button } from "react-bootstrap"
import styled from "styled-components"

const StyledForm = styled(Form)`
    margin-bottom: 2rem;

    @media (min-width: 991px) {
        margin-bottom: 0;
    }
`

const FormLabel = styled(Form.Label)`
    font-size: 1.25rem;
    font-family: 'Open Sans', sans-serif;
`

const FormControl = styled(Form.Control)`
    background-color: #222;
    color: #FFFFFF;

    &:focus{
        background-color: #444;
        color: #fafafa;
    }
`
const FormName = styled(FormControl)`
    border-color: #FF00FF;

    &:focus {
        border-color: #AA00AA;
        box-shadow: 0 0 0 0.2rem #AA00AA;
    }
`

const FormEmail = styled(FormControl)`
    border-color: #FFFF00;

    &:focus {
        border-color: #AAAA00;
        box-shadow: 0 0 0 0.2rem #AAAA00;
    }
`

const FormText = styled(FormControl)`
    display: block;
    width: 100%;
    border-color: #00FFFF;

    &:focus {
        border-color: #00AAAA;
        box-shadow: 0 0 0 0.2rem #00AAAA;
    }
`

const SendButton = styled(Button)`
    background-color: #ffffff;
    color: #FF00FF;
    display: block;
    width: 50%;
    margin: 0 auto;
    border: 4px solid #FFFFFF;
    padding: 0.75rem;
    font-family: 'Permanent Marker', sans-serif;
    font-size: 1.25rem;
    transition: border-color, width 300ms ease-in-out;

    &:hover {
        border: 4px solid #FF00FF;
        background-color: #FFFFFF;
        color: #FF00FF;
        width: 52.5%;
    }

    &:focus {
        box-shadow: 0 0 0 0.2rem #FFFF00;
    }

    &:active {
        color: #FFFFFF;
        background-color: #FF00FF !important;
        border-color: #FFFF00 !important;
    }
`

class ContactForm extends Component {

    state = {
        name: null,
        email: null,
        message: null,
    }

    inputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
        this.clearState();
    }

    clearState = () => {
        this.setState({
            name: null,
            email: null,
            message: null
        })
    }

    render() {
        return (
            <StyledForm onSubmit={this.handleSubmit}>
                <FormGroup controlId="formName">
                    <FormLabel>Name</FormLabel>
                    <FormName name="name" value={this.state.name} onChange={this.inputChange} type="text" required />
                </FormGroup>
                <FormGroup controlId="formEmail">
                    <FormLabel>Email</FormLabel>
                    <FormEmail name="email" value={this.state.email} onChange={this.inputChange} type="email" required />
                </FormGroup>
                <Form.Group controlId="formText">
                    <FormLabel>Message</FormLabel>
                    <FormText name="message" value={this.state.message} onChange={this.inputChange} as="textarea" rows="8" />
                </Form.Group>
                <SendButton type="submit">Send</SendButton>
            </StyledForm>
        )
    }
}

export default ContactForm