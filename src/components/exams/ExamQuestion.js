import React, { useContext, useEffect, useState } from 'react';
import { Card, Checkbox, Form } from 'semantic-ui-react';
import { ContextValues } from '../../context/AppContext';
import '../../styles/UserTestPage.css'

const ExamQuestion = ({ question, setAnswer, questionNumber }) => {
    const { user } = useContext(ContextValues)
    const [selectedAnswer, setSelectedAnswer] = useState([])

    useEffect(() => {
        if (user.exam.questions[questionNumber].answer && user.exam.questions[questionNumber].answer.length > 0) {
            setSelectedAnswer(user.exam.questions[questionNumber].answer)
        } else {
            setSelectedAnswer([])
        }
    }, [user.exam.questions, questionNumber])

    useEffect(() => {
        setAnswer(selectedAnswer)
    }, [selectedAnswer, setAnswer])

    const handleSingleSelect = (e, { value }) => {
        if (question.questionType === 'SingleChoiceQuestion') {
            setSelectedAnswer([value])
        } else {
            if (selectedAnswer.includes(value)) {
                setSelectedAnswer(selectedAnswer.filter(a => a !== value))
            }
            else {
                setSelectedAnswer(prev => ([...prev, value]))
            }
        }
    }

    return (
        <Card fluid>
            <Card.Content textAlign={user.test.language === 'he' ? 'right' : 'left'}>
                <Card.Header>{question.title}</Card.Header>
                <Card.Description>
                    {question.subTitle}
                </Card.Description>
                <div className={`questions ${question.answersDisplay}`}>
                    <Form>
                        {question.answers.map(a =>
                            <Form.Field className={user.test.language === 'he' ? 'question hebrew' : 'question english'}>
                                <label>{a}</label>
                                <Checkbox
                                    radio={question.questionType === 'SingleChoiceQuestion'}
                                    name="answersGroup"
                                    value={a}
                                    checked={selectedAnswer.includes(a)}
                                    onChange={handleSingleSelect}
                                    style={{margin: '3px'}}
                                />
                            </Form.Field>
                        )}
                    </Form>
                </div>
            </Card.Content>
        </Card>
    );
}

export default ExamQuestion;