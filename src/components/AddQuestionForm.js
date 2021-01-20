<<<<<<< Updated upstream
import React, { useState } from "react";
=======
import React, { useReducer } from "react";
>>>>>>> Stashed changes
import {
    Button,
    Divider,
    Dropdown,
    Form,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    TextArea,
    Icon
} from 'semantic-ui-react'
import AnswerForm from "./AnswerForm";

const questionType = [
    { key: 1, text: 'Single Answer', value: 1 },
    { key: 2, text: 'Multi Answer', value: 2 },
=======
=======
>>>>>>> Stashed changes
    Radio,
    TextArea,
    Icon
} from 'semantic-ui-react'
import ServerAccess from "../api/serverAccess";
import AnswerForm from "./AnswerForm";
import QuestionTagInput from './QuestionTagInput';
 
const questionTypeOptions = [
    { key: 1, text: 'Single Answer', value: true },
    { key: 2, text: 'Multi Answer', value: false },
>>>>>>> Stashed changes
]

<<<<<<< Updated upstream
=======
const initialState = {
    title: "",
    subTitle: "",
    questionType: "",
    answers: [{ id: 0, text: "", isCorrect: false }],
    answersDisplay: "vertical",
    tags: [{ id: 'Question', text: 'Question' }, { id: 'Hard', text: 'Hard' }],
    answersIdCounter: 1
}
>>>>>>> Stashed changes

const AddQuestionForm = () => {

    const [answers, setAnswers] = useState([]);
<<<<<<< Updated upstream

    const AddAnswerForm = () => {
        let newAnswer = { answer: "answer", correct: false }
=======
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [questionType, setQuestionType] = useState(false);
    const [answersDisplay, setAnswersDisplay] = useState("");
    const [tags, setTags] = useState([{ id: 'Question', text: 'Question' }, { id: 'Hard', text: 'Hard' }]);
 
    const addAnswerForm = () => {
        let newAnswer = { answer: "", correct: false }
>>>>>>> Stashed changes
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