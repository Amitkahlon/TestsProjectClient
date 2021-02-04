import React, { useReducer } from "react";
import { Link } from 'react-router-dom';

import {
    Button,
    Divider,
    Dropdown,
    Form,
    Radio,
    TextArea,
    Icon,
    List
} from 'semantic-ui-react'
import QuestionTagInput from '../questions/QuestionTagInput';
import questionReducer from '../../reducers/addQuestionReducer';
import AnswerForm from "../answers/AnswersForm";


const questionTypeOptions = [
    { key: 1, text: 'Single Answer', value: "SingleChoiceQuestion" },
    { key: 2, text: 'Multi Answer', value: "MultipleSelectionQuestion" },
]

const QuestionForm = ({ initialState, submitText, onSubmit }) => {
    const [question, dispatch] = useReducer(questionReducer, initialState)
    const submitQuestion = () => {
        const questionToSubmit = createQuestionForSubmit(question);

        onSubmit(questionToSubmit);
    }

    const createQuestionForSubmit = (formQuestion) => {
        let newQuestion = { ...formQuestion }


        newQuestion.correctAnswers = question.answers.filter(answer => answer.isCorrect).map(answer => answer.text);
        newQuestion.incorrectAnswers = question.answers.filter(answer => !answer.isCorrect).map(answer => answer.text);
        newQuestion.tags = question.tags.map(tag => tag.text)

        delete newQuestion.answers;
        delete newQuestion.answersIdCounter;

        return newQuestion;
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

            <AnswerForm question={question} dispatch={dispatch} />

            <Divider />

            <Button primary onClick={() => dispatch({ type: "ADD_QUESTION" })}>
                <Icon name='plus' />
                    Add an answer
            </Button>

            <QuestionTagInput tags={question.tags} setTags={(payload) => dispatch({ type: "SET_TAGS", payload })} />

            <List horizontal>
                <List.Item>
                    <Form.Button content={submitText} primary onClick={submitQuestion} />
                </List.Item>
                <List.Item>
                    <Link to={{
                        pathname: "/questions/view",
                        state: {
                            question: createQuestionForSubmit(question)
                        }
                    }}>
                        <Form.Button content="Preview" primary />
                    </Link>
                </List.Item>
            </List>


        </Form>
    )
}

export default QuestionForm;
