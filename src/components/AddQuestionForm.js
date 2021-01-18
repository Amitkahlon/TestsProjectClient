import React, { useState } from "react";
import {
    Button,
    Divider,
    Dropdown,
    Form,
    TextArea,
    Icon
} from 'semantic-ui-react'
import AnswerForm from "./AnswerForm";
 


const AddQuestionForm = () => {

    const [answers, setAnswers] = useState([]);
    const [] = useState("");
    const [] = useState("");
    const [questionType] = useState(false);
    const [] = useState("");
    const [] = useState([{ id: 'Question', text: 'Question' }, { id: 'Hard', text: 'Hard' }]);
 

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