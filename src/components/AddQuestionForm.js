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
import QuestionTagInput from './QuestionTagInput';

const questionTypeOptions = [
    { key: 1, text: 'Single Answer', value: 1 },
    { key: 2, text: 'Multi Answer', value: 2 },
]


const AddQuestionForm = () => {
    const [answers, setAnswers] = useState([]);
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [questionType, setQuestionType] = useState("");
    const [answersDisplay, setAnswersDisplay] = useState("");
    const [tags, setTags] = useState([{ id: 'Question', text: 'Question' }, { id: 'Hard', text: 'Hard' }]);

    const addAnswerForm = () => {
        let newAnswer = { answer: "answer", correct: false }
        setAnswers([...answers, newAnswer]);
    }

    const removeAnswer = (index) => {
        let newArray = [...answers]
        newArray.splice(index, 1);
        setAnswers(newArray);
    }

    const submitQuestion = () => {
        const question = {
            title: title,
            subTitle: subTitle,
            questionType: questionType,
            tags: [...tags],
            answers: [...answers],
            answersDisplay: answersDisplay
        }

        console.log(question);
    }

    return (
        <Form>
            <Form.Field
                control={TextArea}
                label='Question Text'
                placeholder='Enter question text...'
                value={title}
                onChange={(e, { value }) => setTitle(value)}
            />
            <Form.Field
                control={TextArea}
                label='Question Sub Text'
                placeholder='Enter question sub text...'
                value={subTitle}
                onChange={(e, { value }) => setSubTitle(value)}
            />
            <Form.Dropdown width="10"
                // name="subject"
                value={questionType}
                onChange={(e, { value }) => setQuestionType(value)}
                control={Dropdown}
                options={questionTypeOptions}
                selection
                placeholder="Question Type"
            />

            <Form.Field>
                Selected value:
            </Form.Field>
            <Form.Field>
                <Radio
                    label='Vertical'
                    name='radioGroup'
                    value='vertical'
                    checked={answersDisplay === 'vertical'}
                    onChange={(e, { value }) => setAnswersDisplay(value)}
                />
            </Form.Field>
            <Form.Field>
                <Radio
                    label='Horizontal'
                    name='radioGroup'
                    value='horizontal'
                    checked={answersDisplay === 'horizontal'}
                    onChange={(e, { value }) => setAnswersDisplay(value)}
                />
            </Form.Field>

            <Divider />

            {
                answers.map((answerItem, i) =>
                    <AnswerForm answerItem={answerItem} index={i} key={i} removeAnswer={removeAnswer} />
                )
            }


            <Button floated="right" primary onClick={addAnswerForm}>
                <Icon name='plus' />
                    Add an answer
            </Button>

            <QuestionTagInput tags={tags} setTags={setTags} />

            <Form.Button content='Add Question' primary onClick={submitQuestion} />
        </Form>
    )
}

export default AddQuestionForm;