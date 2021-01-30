import React, { useEffect, useReducer, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Button, Checkbox, Container, Form, Grid, Header, Message, Segment, TextArea } from 'semantic-ui-react';
import serverAccess from '../api/serverAccess';
import NewTestQuestionsList from '../components/NewTestQuestionsList';
import testReducer from '../reducers/addTestReducer';

const EditTestPage = () => {
    const [questions, setQuestions] = useState([])
    const location = useLocation()
    const history = useHistory()
    const initialState = {
        title: location.state.title,
        description: location.state.description,
        passGrade: location.state.passGrade,
        showCorrectAnswers: location.state.showCorrectAnswers,
        questions: location.state.questions.map(q => q._id)
    }
    const [test, dispatch] = useReducer(testReducer, initialState)
    const [errors, setErrors] = useState(null)
    const [selectedQuestions, setSelectedQuestions] = useState(test.questions)
    useEffect(() => {
        serverAccess.get('/api/questions')
        .then(({ data }) => setQuestions(data.questions))
        .catch(err => setErrors(err))
    }, [setQuestions])

    useEffect(() => {
        dispatch({type: 'SET_QUESTIONS', payload: selectedQuestions})
    }, [selectedQuestions])

    const handleSelectQuestion = (qts) => {
        setSelectedQuestions(qts)
    }

    const handleSubmit = async () => {
        const res = await serverAccess.put(`/api/tests/${location.state._id}`, {test: test})
        if(res)
        {
            if(res.data.test){
                history.push('/tests')
            }else if(res.data.error){
                setErrors(res.data.error)
            }
        }
    }
    return (
        <>
            {test &&
                <Container textAlign='center'>
                    <Header as='h1'>Edit test: {test.title}</Header>
                    <Grid columns={3}>
                        <Grid.Column width={3} />
                        <Grid.Column width={10}>
                            {errors && <Message error>
                                <Container textAlign='left'>
                                    {errors.map(e => (
                                        <Message.Item>{e.message}</Message.Item>
                                    ))}
                                </Container>
                            </Message>}
                            <Container textAlign='left'>
                                <Segment>
                                    <Form>
                                        <Form.Field>
                                            <Form.Input
                                                label='Test title:'
                                                type='text'
                                                value={test.title}
                                                onChange={(e) => dispatch({ type: 'SET_TITLE', payload: e.target.value })}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <Form.Input
                                                label='Test description:'
                                                type='text'
                                                control={TextArea}
                                                value={test.description}
                                                onChange={(e) => dispatch({ type: 'SET_DESCRIPTION', payload: e.target.value })}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <Form.Input
                                                label='Test pass grade:'
                                                type='text'
                                                style={{ width: '20%' }}
                                                value={test.passGrade}
                                                onChange={(e) => dispatch({ type: 'SET_PASS_GRADE', payload: e.target.value })}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <Checkbox
                                                label='Show correct answers in the end of the test?'
                                                checked={test.showCorrectAnswers}
                                                onChange={(e, { checked }) => dispatch({ type: 'SET_SHOW_CORRECT_ANSWERS', payload: checked })}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <div className="questions-table">
                                                <NewTestQuestionsList questions={questions} handleSelectQuestion={handleSelectQuestion} editQts={test.questions}/>
                                            </div>
                                        </Form.Field>
                                        <Container textAlign='center'>
                                            <Button primary icon="plus" onClick={handleSubmit}>Done</Button>
                                        </Container>
                                    </Form>
                                </Segment>
                            </Container>
                        </Grid.Column>
                        <Grid.Column width={3} />
                    </Grid>
                </Container>
            }
        </>
    );
}

export default EditTestPage;