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
    Icon
} from 'semantic-ui-react'
import AnswerForm from "./AnswerForm";

const questionType = [
    { key: 1, text: 'Single Answer', value: 1 },
    { key: 2, text: 'Multi Answer', value: 2 },
]


const AddQuestionForm = () => {

    const [answers, setAnswers] = useState([]);

    const AddAnswerForm = () => {
        let newAnswer = { answer: "answer", correct: false }
        setAnswers([...answers, newAnswer]);
    }

    const removeAnswer = (index) => {
        let newArray = [...answers]
        newArray.splice(index, 1);
        setAnswers(newArray);
    }

    return (
        <Form>
            <Form.Field
                control={TextArea}
                label='Question Text'
                placeholder='Enter question text...'
            />
            <Form.Field
                control={TextArea}
                label='Question Sub Text'
                placeholder='Enter question sub text...'
            />
            <Form.Dropdown width="10"
                control={Dropdown}
                options={questionType}
                selection
                placeholder="Question Type"
            />

            <Divider />

            {
                answers.map((answerItem, i) =>
                    <AnswerForm answerItem={answerItem} index={i} key={i} removeAnswer={removeAnswer}/>
                )
            }


            <Button floated="right" primary onClick={AddAnswerForm}>
                <Icon name='plus' />
                    Add an answer
                </Button>
        </Form>
    )
}

export default AddQuestionForm;