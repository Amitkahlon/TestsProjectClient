import React from "react";
import { Button, Container, Header, List } from 'semantic-ui-react'

const Question = ({ question }) => {
console.log(question);
    const Answers = () => {
        return <List>
            {
                question.incorrectAnswers.map((answer, i) => {
                    return (
                        <>
                            <p>{answer}</p>
                            <p>{i}</p>
                        </>
                    )
                })
            }
        </List>

    }


    return (
        <Container textAlign="left">
            <Header as="h1">{question.title}</Header>
            <Header as="h4">{question.subTitle}</Header>
            <Answers />

        </Container>
    )
}

export default Question;