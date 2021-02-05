import React from "react";
import {
    Button,
    Form,
    Icon,
    Label,
} from 'semantic-ui-react'

const MultiAnswerForm = ({ answerItem, index, removeAnswer, setText, setIsCorrect }) => {
    return (
        <Form.Group>
            <Label>{index}</Label>
            <Form.Input
                placeholder='Enter Answer text...'
                content="dsad"
                value={answerItem.text} 
                onChange={(e, { value }) => setText(value)}
            />

            <Form.Checkbox
                label="Correct"
                onChange={() => setIsCorrect(!answerItem.isCorrect) }
                checked={answerItem.isCorrect}
            />

            <Button size="mini" color="red" onClick={() => removeAnswer(answerItem.id)}>
                <Icon name='delete' size="large" />
                Remove
          </Button>
        </Form.Group>
    )
}

export default MultiAnswerForm