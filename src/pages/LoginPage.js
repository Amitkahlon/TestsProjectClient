import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Button, Dropdown, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import serverAccess from '../api/serverAccess'
import { ContextValues } from '../context/AppContext'

const LoginPage = (props) => {
    const { setToken } = useContext(ContextValues)
    const [foundUser, setFoundUser] = useState(null)
    const [organization, setOrganization] = useState(null)
    const [user, setUser] = useState({
        email: '',
        password: '',
        organization: null,
        logged: false
    })
    const [errorMsg, setErrorMsg] = useState('')
    const handleLogin = async () => {
        try {
            const res = await serverAccess.post('/api/login', { user: {...user, logged: foundUser? true : false} })
            if (res) {
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token)
                    setToken(res.data.token)
                    serverAccess.defaults.headers.common['x-auth-token'] = res.data.token;
                    props.history.push('/admin')
                } else {
                    if(res.data.user){
                        setFoundUser(res.data.user)
                    }
                    else{
                        if (res.data.message)
                            setErrorMsg(res.data.message)
                        else
                            setErrorMsg(res.data)
                    }
                }
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    const getOrgs = () => {
        let orgs = foundUser.organizations.map(org => (
            {text: org.name, value: org._id}
        ))
        return orgs
    }

    let loginForm = <div>
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
        <br/>
    </div>

    let selectOrg = foundUser ? <div>
        <Form.Dropdown
            value={organization}
            onChange={(e, { value }) => {
                setUser(user => ({
                    ...user,
                    organization: value
                }))
                setOrganization(value)
            }}
            control={Dropdown}
            options={getOrgs()}
            selection
            placeholder="Organization"
        />
        <br/>
    </div> : '';

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    <i className="fas fa-flask"></i> {foundUser? `Welcome back ${foundUser.email}` : 'Log-in to your account'}
            </Header>
                <Message negative hidden={errorMsg.length === 0}>
                    <Message.Header>
                        Something went wrong...
                </Message.Header>
                    <p>{errorMsg}</p>
                </Message>
                <Form size='large'>
                    <Segment stacked>
                        {foundUser === null? loginForm : selectOrg}
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