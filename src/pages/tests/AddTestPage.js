import React, { useEffect, useReducer, useState } from 'react';
import { Button, Container, Form, Grid, Header, Segment, TextArea, Checkbox, Message, Dropdown } from 'semantic-ui-react';
import NewTestQuestionsList from '../../components/tests/NewTestQuestionsList';
import '../../styles/AddTestPage.css';
import serverAccess from '../../api/serverAccess';
import testReducer from '../../reducers/addTestReducer';
import { useHistory } from 'react-router-dom';

const initialState = {
    title: '',
    description: '',
    passGrade: -1,
    showCorrectAnswers: false,
    questions: [],
    passMessage: '',
    failMessage: ''
}

const AddTestPage = () => {
    const [test, dispatch] = useReducer(testReducer, initialState)
    const [questions, setQuestions] = useState([])
    const [selectedQuestions, setSelectedQuestions] = useState([])
    const [errors, setErrors] = useState(null)
    const [selectedLanguage, setSelectedLanguage] = useState('')
    const history = useHistory()

    useEffect(() => {
        dispatch({ type: 'SET_LANGUAGE', payload: selectedLanguage })
    }, [selectedLanguage])

    useEffect(() => {
        serverAccess.get('/api/questions')
            .then(({ data }) => {
                if (data.questions) {
                    setQuestions(data.questions)
                }
                else {
                    console.error(data.message);
                }
            })
            .catch(err => console.log(err))
    }, [setQuestions])

    useEffect(() => {
        dispatch({ type: 'SET_QUESTIONS', payload: selectedQuestions })
    }, [selectedQuestions])

    const handleSelectQuestion = (qts) => {
        setSelectedQuestions(qts)
    }

    const handleSubmit = async () => {
        const res = await serverAccess.post('/api/tests', { test })
        if (res.data.error) {
            setErrors(res.data.error)
        }
        else if (res.data.test) {
            history.push('/tests')
        }
    }

    let langOptions = [
        { text: 'English', value: 'en' },
        { text: 'Hebrew', value: 'he' }
    ]

    return (
        <Container textAlign='center'>
            <Header as='h1'>Add new test</Header>
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
                                        onChange={(e) => dispatch({ type: 'SET_TITLE', payload: e.target.value })}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label='Test description:'
                                        type='text'
                                        control={TextArea}
                                        onChange={(e) => dispatch({ type: 'SET_DESCRIPTION', payload: e.target.value })}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label='Test pass grade:'
                                        type='text'
                                        style={{ width: '20%' }}
                                        onChange={(e) => dispatch({ type: 'SET_PASS_GRADE', payload: e.target.value })}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label='Test language:'
                                        control={Dropdown}
                                        selection
                                        placeholder='Language'
                                        options={langOptions}
                                        value={selectedLanguage}
                                        onChange={(e, { value }) => {
                                            setSelectedLanguage(value)
                                        }}
                                        style={{width: '30%'}}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Checkbox
                                        label='Show correct answers in the end of the test?'
                                        onChange={(e, { checked }) => dispatch({ type: 'SET_SHOW_CORRECT_ANSWERS', payload: checked })}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <div className="questions-table">
                                        <NewTestQuestionsList questions={questions} handleSelectQuestion={handleSelectQuestion} />
                                    </div>
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label='Text for the user in case of passing the test:'
                                        type='text'
                                        control={TextArea}
                                        onChange={(e) => dispatch({ type: 'SET_PASS_MESSAGE', payload: e.target.value })}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input
                                        label='Text for the user in case of failing the test:'
                                        type='text'
                                        control={TextArea}
                                        onChange={(e) => dispatch({ type: 'SET_FAIL_MESSAGE', payload: e.target.value })}
                                    />
                                </Form.Field>
                                <Container textAlign='center'>
                                    <Button primary icon="plus" onClick={handleSubmit}>Add new test</Button>
                                </Container>
                            </Form>
                        </Segment>
                    </Container>
                </Grid.Column>
                <Grid.Column width={3} />
            </Grid>
        </Container>
    );
}

export default AddTestPage;