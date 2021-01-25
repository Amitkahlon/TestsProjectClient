import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import serverAccess from '../api/serverAccess';
import userReducer from '../reducers/userReducer';
import * as yup from 'yup'
import {useFormik} from 'formik'

const initialState = {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    class: ''
}

const validateSchema = yup.object({
    id: yup.string('Enter your ID').test('len', 'Invalid ID', v => v.length === 9).required('ID is required'),
    email: yup.string('Enter your email').email('Invalid email').required('Email is required'),
    firstName: yup.string('Enter your first name').min(2, 'First name is less than 3 characters').required('First name is required'),
    lastName: yup.string('Enter your last name').min(2, 'Last name is less than 3 characters').required('Last name is required'),
    class: yup.string('Enter your class name').min(2, 'Class name is less than 3 characters').required('Class name is required'),
})

const UserFormPage = () => {
    const { id } = useParams()
    const [test, setTest] = useState(null)
    const [error, setError] = useState(null)
    const [user, dispatch] = useReducer(userReducer, initialState)
    const formik = useFormik({
        initialValues: initialState,
        validationSchema: validateSchema
    })
    useEffect(() => {
        const getTest = async () => {
            const res = await serverAccess.get(`/api/tests/${id}`)
            if (res) {
                if (res.data.test) {
                    setTest(res.data.test)
                } else if (res.data.message) {
                    setError(res.data.message)
                }
            }
        }
        getTest()
    }, [id])

    const handleSubmit = () =>{
        console.log(user);
    }

    if (test) {
        return (
            <Grid textAlign='center' verticalAlign='center' style={{ heigjt: '100vh' }}>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <i className="fas fa-flask"></i> Please complete the following form to begin:
                    </Header>
                    <Segment>
                        <Form>
                            <Form.Input label='ID:'
                                onChange={(e) => dispatch({type: 'SET_ID', payload: e.target.value})}
                            />
                            <Form.Input label='Email:' 
                                onChange={(e) => dispatch({type: 'SET_EMAIL', payload: e.target.value})}
                            />
                            <Form.Input label='First name:' 
                                onChange={(e) => dispatch({type: 'SET_FIRST_NAME', payload: e.target.value})}
                            />
                            <Form.Input label='Last Name:' 
                                onChange={(e) => dispatch({type: 'SET_LAST_NAME', payload: e.target.value})}
                            />
                            <Form.Input label='Class:' 
                                onChange={(e) => dispatch({type: 'SET_CLASS', payload: e.target.value})}
                            />
                            <Button color='teal' size='large' onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    } else {
        return <Header>{error}</Header>
    }
}

export default UserFormPage;