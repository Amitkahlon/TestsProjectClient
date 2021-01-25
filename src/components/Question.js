import React from "react";
import { Button, Checkbox, Container, Header, List, Radio } from 'semantic-ui-react'
import AnswerSelection from './AnswerSelection';

const Question = ({ question }) => {

    return (
        <Container textAlign="left">
            <Header as="h1">{question.title}</Header>
            <Header as="h4">{question.subTitle}</Header>
            <AnswerSelection question={question} />

            <List horizontal>
                <List.Item>
                    <Button>Last Question</Button>
                </List.Item>
                <List.Item>
                    <Button>Next Question</Button>
                </List.Item>
            </List>
        </Container>
    )
}

export default Question;