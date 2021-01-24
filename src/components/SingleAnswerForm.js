import React from "react";
import {
    Button,
    Form,
    Icon,
    Label,
} from 'semantic-ui-react'

const SingleAnswerForm = ({ answerItem, index, removeAnswer, setText, setCorrectAnswer, correctAnswer }) => {
console.log(answerItem);

    return (
        <Form.Group>
            <Label>{index}</Label>
            <Form.Input
                placeholder='Enter Answer text...'
                value={answerItem.text} 
                onChange={(e, { value }) => setText(value)}
            />

            <Form.Radio
                label="Correct"
                onChange={() => setCorrectAnswer()}
                value={answerItem.id}
                checked={correctAnswer.id === answerItem.id }
            />

            <Button size="mini" color="red" onClick={() => removeAnswer(answerItem.id)}>
                <Icon name='delete' size="large" />
                Remove
          </Button>
        </Form.Group>
    )
}

export default SingleAnswerForm