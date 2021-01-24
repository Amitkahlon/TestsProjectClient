import React, { useReducer } from "react";
import {
    Button,
    Divider,
    Dropdown,
    Form,
    Radio,
    TextArea,
    Icon
} from 'semantic-ui-react'
import AnswerForm from "./MultiAnswerForm";
import QuestionTagInput from './QuestionTagInput';
import questionReducer from '../reducers/addQuestionReducer';
import SingleAnswerForm from "./SingleAnswerForm";
import MultiAnswerForm from "./MultiAnswerForm";

const questionTypeOptions = [
    { key: 1, text: 'Single Answer', value: "SingleChoiceQuestion" },
    { key: 2, text: 'Multi Answer', value: "MultipleSelectionQuestion" },
]

const QuestionForm = ({ initialState, submitText, onSubmit }) => {
    const [question, dispatch] = useReducer(questionReducer, initialState)
    const submitQuestion = () => {
        let submitQuestion = { ...question }
        submitQuestion.correctAnswers = question.answers.filter(answer => answer.isCorrect).map(answer => answer.text);
        submitQuestion.incorrectAnswers = question.answers.filter(answer => !answer.isCorrect).map(answer => answer.text);
        submitQuestion.tags = question.tags.map(tag => tag.text)

        delete submitQuestion.answers;
        delete submitQuestion.answersIdCounter;

        onSubmit(submitQuestion);
    }

    const AnswerForm = () => {
        if (question.questionType === 'SingleChoiceQuestion') {
            const correctAnswer = question.answers.find((answer) => answer.isCorrect === true);
            // console.log("correct answer", correctAnswer);
            return (
                question.answers.map((answerItem, i) =>
                    <SingleAnswerForm answerItem={answerItem} key={answerItem.id} index={i} removeAnswer={(id) => dispatch({ type: "REMOVE_ANSWER", payload: id })}
                        setText={(text) => dispatch({ type: "SET_ANSWER_TEXT", payload: { text, id: answerItem.id } })}
                        setCorrectAnswer={() => dispatch({ type: "SET_CORRECT_ANSWER", payload: { id: answerItem.id } })}
                        correctAnswer={correctAnswer}
                    />
                )
            )
        } else if (question.questionType === 'MultipleSelectionQuestion') {
            return (
                question.answers.map((answerItem, i) =>
                    <MultiAnswerForm answerItem={answerItem} key={answerItem.id} index={i} removeAnswer={(id) => dispatch({ type: "REMOVE_ANSWER", payload: id })}
                        setText={(text) => dispatch({ type: "SET_ANSWER_TEXT", payload: { text, id: answerItem.id } })}
                        setIsCorrect={(isCorrect) => dispatch({ type: "SET_ANSWER_ISCORRECT", payload: { isCorrect, id: answerItem.id } })} />
                )
            )
        } else {
            <p>error, question type is missing or incorrect</p>
        }
    }

    return (
        <Form>
            <Form.Field
                control={TextArea}
                label='Question Text'
                placeholder='Enter question text...'
                value={question.title}
                onChange={(e, { value }) => dispatch({ type: "SET_TITLE", payload: value })}

            />
            <Form.Field
                control={TextArea}
                label='Question Sub Text'
                placeholder='Enter question sub text...'
                value={question.subTitle}
                onChange={(e, { value }) => dispatch({ type: "SET_SUBTITLE", payload: value })}
            />
            <Form.Dropdown width="10"
                control={Dropdown}
                options={questionTypeOptions}
                selection
                placeholder="Question Type"
                value={question.questionType}
                onChange={(e, { value }) => dispatch({ type: "SET_QUESTIONTYPE", payload: value })}
            />

            <Form.Field label='Answer View' />

            <Form.Field>
                <Radio
                    label='Vertical'
                    name='radioGroup'
                    value='vertical'
                    checked={question.answersDisplay === 'vertical'}
                    onChange={(e, { value }) => dispatch({ type: "SET_ANSWERDISPLAY", payload: value })}
                />
            </Form.Field>
            <Form.Field>
                <Radio
                    label='Horizontal'
                    name='radioGroup'
                    value='horizontal'
                    checked={question.answersDisplay === 'horizontal'}
                    onChange={(e, { value }) => dispatch({ type: "SET_ANSWERDISPLAY", payload: value })}
                />
            </Form.Field>

            <Divider />

            <AnswerForm />


            <Button primary onClick={() => dispatch({ type: "ADD_QUESTION" })}>
                <Icon name='plus' />
                    Add an answer
            </Button>

            <QuestionTagInput tags={question.tags} setTags={(payload) => dispatch({ type: "SET_TAGS", payload })} />

            <Form.Button content={submitText} primary onClick={submitQuestion} />
        </Form>
    )
}

export default QuestionForm;
