import React, { useState } from "react";
import {
    Button,
    Checkbox,
    Divider,
    Dropdown,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
    Icon,
    FormGroup,
    Label,
} from 'semantic-ui-react'

const AnswerForm = ({ answerItem, index, removeAnswer }) => {
    const [correct, setCorrect] = useState(answerItem.correct);
    const [answer, setAnswer] = useState(answerItem.answer);

    return (
        <Form.Group>
            <Label>{index}</Label>
            <Form.Input
                placeholder='Enter Answer text...'
                content="dsad"
                value={answer} 
                onChange={(e, { value }) => setAnswer(value)}
            />

            <Form.Checkbox
                label="Correct"
                onChange={() => setCorrect(!correct)}
                checked={correct}
            />

            <Button size="mini" color="red" onClick={() => removeAnswer(index)}>
                <Icon name='delete' size="large" />
                Remove
          </Button>
        </Form.Group>
    )
}

export default AnswerForm