import React from "react";
import { Button, Container, Header } from 'semantic-ui-react'

const Question = ({ question }) => {
    return (
        <Container textAlign="left">
            <Header as="h1">{question.title}</Header>
            <Header as="h4">{question.subTitle}</Header>
            

        </Container>
    )
}

export default Question;