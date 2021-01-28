import React, { useContext, useEffect, useState } from 'react';
import { Button, Grid, Header, Icon } from 'semantic-ui-react';
import serverAccess from '../api/serverAccess';
import ExamQuestion from '../components/ExamQuestion';
import { ContextValues } from '../context/AppContext';
import '../styles/UserTestPage.css'

const UserTestPage = () => {
    const { user } = useContext(ContextValues)
    const [questionNumber, setQuestionNumber] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    useEffect(() => {
        console.log(user.test.questions[questionNumber]);
    }, [questionNumber])
    const handleMoveQuestion = async (n) => {
        if(questionNumber === 0 && n === -1) return;
        if(questionNumber === user.test.questions.length-1 && n === 1){
            //end of test
        }else{
            let question = {
                question: {
                    title: user.test.questions[questionNumber].title
                },
                answer: selectedAnswer
            }
            const res = await serverAccess.post(`/api/exams/${user.exam._id}`, {question})
            if(res.data === true){
                setQuestionNumber(questionNumber + n)
            }
        }
    }
    return (
        <div>
            <Grid columns={3}>
                <Grid.Column width={5} />
                <Grid.Column width={6}>
                    <Header as='h5'>Question: {questionNumber + 1} out of {user.test.questions.length}</Header>
                    <ExamQuestion question={user.test.questions[questionNumber]} setAnswer={(a) => setSelectedAnswer(a)}/>
                    <div className='question-btns'>
                    <Button basic color='blue' disabled={questionNumber === 0} onClick={() => handleMoveQuestion(-1)}>
                        <Icon name='arrow left' />
                        Previous Question
                    </Button>
                    <Button basic color='green' onClick={() => handleMoveQuestion(1)}>
                        Next Question
                        <Icon name='arrow right' />
                    </Button>
                </div>
                </Grid.Column>
                <Grid.Column width={5} />
            </Grid>
        </div>
    );
}

export default UserTestPage;