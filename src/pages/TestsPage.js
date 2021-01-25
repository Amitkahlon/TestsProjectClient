import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Icon } from 'semantic-ui-react';
import serverAccess from '../api/serverAccess';
import TestsList from '../components/TestsList';
import { ContextValues } from '../context/AppContext';

const TestsPage = () => {
    const { admin } = useContext(ContextValues)
    const [testsList, setTestsList] = useState([])

    useEffect(() => {
        serverAccess.get('/api/tests').then(res => setTestsList(res.data)).catch(err => console.log(err))
    }, [])

    return (
        <Container textAlign='center'>
            <Header as='h1'>{admin.organization.name}'s tests</Header>
            <Container textAlign='right'>
                <Link to='/tests/add'>
                    <Button primary size='small'>
                        <Icon name='plus' />
                        Add new test
                    </Button>
                </Link>
            </Container>
            <TestsList tests={testsList} setTests={setTestsList} />
        </Container>
    );
}

export default TestsPage;