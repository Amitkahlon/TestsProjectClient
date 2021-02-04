import React, { useContext, useEffect, useState } from 'react';
import { Container, Dropdown, Form, Header, Segment, Button } from 'semantic-ui-react';
import serverAccess from '../../api/serverAccess';
import { ContextValues } from '../../context/AppContext';

const ChooseOrganization = (props) => {
    const {setAdmin, setToken} = useContext(ContextValues)
    const [org, setOrg] = useState(null)
    const [organizations, setOrganizations] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getOrgs()
    }, [])
    const getOrgs = async () => {
        try {
            const res = await serverAccess.get('/api/organizations')
            if (res) {
                let orgs = res.data.map(org => (
                    { text: org.name, value: org._id }
                ))
                setOrganizations(orgs)
                return orgs
            }
        } catch (err) {
            console.log(err);
            return []
        }
    }
    const chooseOrganizationHandler = async () => {
        if(!org) return;
        setLoading(true)
        try {
            const res = await serverAccess.get(`/api/organizations/${org}`)
            if (res) {
                let token = await serverAccess.get(`/api/users/me`, {
                    headers:{
                        organization: res.data.organization._id
                    }
                })
                if(token){
                    setAdmin(token.data.admin)
                    localStorage.setItem('token', token.data.token)
                    setToken(token.data.token)
                    setLoading(false)
                }
            }
        } catch (err) {
            setLoading(false)
            console.log(err);
        }
    }
    return (
        <Container textAlign='center' style={{ width: '60vh' }}>
            <Header as='h1' color='teal'>Choose organization</Header>
            <Segment>
                <Form>
                    <Form.Dropdown
                        value={org}
                        onChange={(e, { value }) => {
                            setOrg(value)
                        }}
                        control={Dropdown}
                        options={organizations}
                        selection
                        placeholder="Organization"
                    />

                    <Button
                        color='teal'
                        disabled={!org ? true : false}
                        onClick={chooseOrganizationHandler}
                        loading={loading}
                    >
                        Next
                            </Button>
                </Form>
            </Segment>
        </Container>
    );
}

export default ChooseOrganization;