import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, Grid, Header, Icon } from 'semantic-ui-react';
import serverAccess from '../../api/serverAccess';
import ExamQuestion from '../../components/exams/ExamQuestion';
import { ContextValues } from '../../context/AppContext';
import '../../styles/UserTestPage.css'

const UserTestPage = () => {
    const { user, setUser } = useContext(ContextValues)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const history = useHistory()

    const handleMoveQuestion = async (n) => {
        if (questionNumber === 0 && n === -1) return;
        if (questionNumber === user.test.questions.length && n === -1) {
            setQuestionNumber(questionNumber + n)
        } else {
            let question = {
                question: {
                    title: user.test.questions[questionNumber].title
                },
                answer: selectedAnswer
            }
            const res = await serverAccess.post(`/api/exams/${user.exam._id}`, { question })
            if (res.data.exam) {
                setUser(usr => ({ ...usr, exam: res.data.exam }))
                setQuestionNumber(questionNumber + n)
            }
        }
    }

    const handleSubmit = async () =>{
        const res = await serverAccess.post(`/api/exams/${user.exam._id}/done`, {exam: user.exam})
        if(res){
            if(res.data.exam){
                setUser(usr => ({ ...usr, exam: res.data.exam }))
                history.push('/test/results')
            }
        }
    }

    let endOfTest = questionNumber === user.test.questions.length ?
        <>
            <Header as='h5'>End of the test: {user.test.title}</Header>
            <Card fluid>
                <Card.Content>
                    <Card.Header>You have answered {user.exam.questions.filter(q => q.answer && q.answer.length > 0).length}/{user.test.questions.length}</Card.Header>
                    <Card.Description>
                        Are you sure you want to submit the test? you can still check your answers.
                    </Card.Description>
                </Card.Content>
            </Card>
            <div className='question-btns'>
                <Button basic color='blue' disabled={questionNumber === 0} onClick={() => handleMoveQuestion(-1)}>
                    <Icon name='arrow left' />
                     Previous Question
                </Button>
                <Button basic color='green' onClick={handleSubmit}>
                    <Icon name='bars'/>
                    Submit
                </Button>
            </div>
        </>
        :
        <>
            <Header as='h5'>Question: {questionNumber + 1} out of {user.test.questions.length}</Header>
            <ExamQuestion question={user.test.questions[questionNumber]} setAnswer={(a) => setSelectedAnswer(a)} questionNumber={questionNumber} />
            <div className='question-btns'>
                <Button basic color='blue' disabled={questionNumber === 0} onClick={() => handleMoveQuestion(-1)}>
                    <Icon name='arrow left' />
                    Previous Question
                </Button>
                <Button basic color='green' onClick={() => handleMoveQuestion(1)}>
                    Next Question
                    <Icon name='arrow right'/>
                </Button>
            </div>
        </>
    return (
        <div style={{marginTop: '1rem'}}>
            <Grid columns={3}>
                <Grid.Column width={5} />
                <Grid.Column width={6}>
                    {endOfTest}
                </Grid.Column>
                <Grid.Column width={5} />
            </Grid>
        </div>
    );
}

export default UserTestPage;