import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import serverAccess from '../../api/serverAccess'
import { ContextValues } from '../../context/AppContext'

const LoginPage = (props) => {
    const { setToken, setAdmin } = useContext(ContextValues)
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [errorMsg, setErrorMsg] = useState('')
    const handleLogin = async () => {
        console.log(props);
        try {
            const res = await serverAccess.post('/api/login', { user })
            if (res) {
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token)
                    setToken(res.data.token)
                    serverAccess.defaults.headers.common['x-auth-token'] = res.data.token;
                    setAdmin({user: res.data.user})
                } else {
                    if (res.data.message)
                        setErrorMsg(res.data.message)
                    else
                        setErrorMsg(res.data)
                }
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <i className="fas fa-flask"></i> Log-in to your account
                </Header>
                <Message negative hidden={errorMsg.length === 0}>
                    <Message.Header>
                        Something went wrong...
                </Message.Header>
                    <p>{errorMsg}</p>
                </Message>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={(e) => setUser(prevUser => ({
                            ...prevUser,
                            email: e.target.value
                        }))} />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            onChange={(e) => setUser(prevUser => ({
                                ...prevUser,
                                password: e.target.value
                            }))}
                        />
                        <Button color='teal' fluid size='large' onClick={handleLogin}>
                            Login
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? Contact with Roee or Amit.
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default LoginPage