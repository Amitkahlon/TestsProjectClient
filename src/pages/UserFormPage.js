import React, { useContext } from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import serverAccess from '../api/serverAccess';
import { ContextValues } from '../context/AppContext';
import userReducer from '../reducers/userReducer';

const initialState = {
    studentId: '',
    studentEmail: '',
    studentFirstName: '',
    studentLastName: '',
    class: '',
    questions: []
}

const UserFormPage = () => {
    const { id } = useParams()
    const { setUser, user } = useContext(ContextValues)
    const [test, setTest] = useState(null)
    const [error, setError] = useState(null)
    const [userForm, dispatch] = useReducer(userReducer, initialState)

    useEffect(() => {
        dispatch({ type: 'SET_TEST_ID', payload: id })
        const getTest = async () => {
            const res = await serverAccess.get(`/api/tests/${id}`)
            if (res) {
                if (res.data.test) {
                    setTest(res.data.test)
                    let qts = []
                    res.data.test.questions.forEach(q => {
                        qts.push({
                            question:{
                                title: q.title,
                                answers: q.answers,
                                questionType: q.questionType
                            }
                        })
                    })
                    dispatch({ type: 'SET_TEST_QUESTIONS', payload: qts })
                } else if (res.data.message) {
                    setError(res.data.message)
                }
            }
        }
        getTest()
    }, [id])

    const handleSubmit = async () => {
        const res = await serverAccess.post('/api/exams/', { exam: userForm })
        if (res) {
            if (res.data.exam) {
                setUser({ test: test, exam: res.data.exam })
            } else if (res.data.error) {
                setError(res.data.error)
            }
        }
    }

    if (test && !user) {
        return (
            <Grid textAlign='center' verticalAlign='center' style={{ heigjt: '100vh' }}>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <i className="fas fa-flask"></i> Please complete the following form to begin:
                    </Header>
                    <Segment>
                        {error && <Message error>
                            <Container textAlign='left'>
                                {error.map(e => (
                                    <Message.Item>{e.message}</Message.Item>
                                ))}
                            </Container>
                        </Message>}
                        <Form>
                            <Form.Input label='ID:'
                                onChange={(e) => dispatch({ type: 'SET_ID', payload: e.target.value })}
                            />
                            <Form.Input label='Email:'
                                onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                            />
                            <Form.Input label='First name:'
                                onChange={(e) => dispatch({ type: 'SET_FIRST_NAME', payload: e.target.value })}
                            />
                            <Form.Input label='Last Name:'
                                onChange={(e) => dispatch({ type: 'SET_LAST_NAME', payload: e.target.value })}
                            />
                            <Form.Input label='Class:'
                                onChange={(e) => dispatch({ type: 'SET_CLASS', payload: e.target.value })}
                            />
                            <Button color='teal' size='large' onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    } else if (user) {
        return (
            <Container>
                <Segment>
                    <Header>You are about to begin the test: {user.test.title}</Header>
                    <p style={{ flexWrap: 'wrap' }}>{user.test.description}</p>
                    <Container textAlign='center'>
                        <Link to='/test'>
                            <Button primary>Start</Button>
                        </Link>
                    </Container>
                </Segment>
            </Container>
        )
    } else {
        return <Header>{error}</Header>
    }
}

export default UserFormPage;