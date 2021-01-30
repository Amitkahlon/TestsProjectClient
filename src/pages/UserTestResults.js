import React, { useContext, useEffect } from 'react';
import { Container, Header, Message, Progress, Segment } from 'semantic-ui-react';
import ShowTestResults from '../components/ShowTestResults';
import { ContextValues } from '../context/AppContext';
import '../styles/UserTestResults.css';

const UserTestResults = () => {
    const { user, setUser } = useContext(ContextValues)
    useEffect(() => {
        return () => {
            setUser(null);
        }
    })
    return (
        <Container textAlign='center'>
            <Segment>
                <Header>{user.test.title}'s results:</Header>
                <div className='progress'>
                    <Progress
                        style={{ width: '30%' }}
                        success={user.exam.grade > user.test.passGrade}
                        warning={user.exam.grade === user.test.passGrade}
                        error={user.exam.grade < user.test.passGrade}
                        percent={user.exam.grade}
                        active
                    >
                        Your grade is: {user.exam.grade}
                    </Progress>
                    <Message
                        success={user.exam.grade > user.test.passGrade}
                        error={user.exam.grade <= user.test.passGrade}
                    >
                        {user.exam.grade > user.test.passGrade ? 'Well done!' : 'Better luck next time!'}
                    </Message>
                    {user.test.showCorrectAnswers && 
                        <>
                            <Header>Correct answers:</Header>
                            {user.exam.questions.map(q => <ShowTestResults question={q} />)}
                        </>
                    }
                </div>
            </Segment>
        </Container>
    );
}

export default UserTestResults;