import React from 'react';
import { Container, List, Table, Header, Icon } from "semantic-ui-react";

const AnswerDetails = ({ correctAnswers, incorrectAnswers, answerChoosen }) => {

    const answers = correctAnswers.map((corrAns) => {
        return { text: corrAns, isCorrect: true }
    }).concat(incorrectAnswers.map((incorrAns) => {
        return { text: incorrAns, isCorrect: false }
    })).map(ans => {
        return { ...ans, isSelected: answerChoosen.includes(ans.text) }
    }).sort((a, b) => {
        if (a.text > b.text) {
            return 1
        }
        if (a.text < b.text) {
            return -1
        }
        return 0;
    })

    const answerItem = (answer) => {
        let fontColor = "black";
        let iconName = "";

        if (answer.isCorrect) {
            fontColor = "green";
        }

        if (answer.isSelected) {
            iconName = "left arrow";
        }

        if(answer.isSelected && !answer.isCorrect){
            fontColor = "red";
            iconName = "times";
        } 

        return (
            <div style={{ marginBottom: 5 }}>
                <span style={{ color: fontColor, fontWeight: "normal", marginRight: 10 }}>{answer.text}</span>
                <Icon name={iconName} />
            </div>
        )
    }

    return (
        <Container>
            <Header as="h4">Answers</Header>
            <List>
                {
                    answers.map((answer) => {
                        return answerItem(answer);
                    })
                }
            </List>
        </Container>

    )
}

export default AnswerDetails
