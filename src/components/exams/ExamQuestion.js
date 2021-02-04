import React, { useContext, useEffect, useState } from 'react';
import { Card, Checkbox, Form } from 'semantic-ui-react';
import { ContextValues } from '../../context/AppContext';
import '../../styles/UserTestPage.css'

const ExamQuestion = ({ question, setAnswer, questionNumber }) => {
    const {user} = useContext(ContextValues)
    const [selectedAnswer, setSelectedAnswer] = useState([])

    useEffect(() => {
        if(user.exam.questions[questionNumber].answer && user.exam.questions[questionNumber].answer.length > 0){
            setSelectedAnswer(user.exam.questions[questionNumber].answer)
        }else{
            setSelectedAnswer([])
        }
    }, [question, questionNumber, user.exam.questions])

    useEffect(() => {
        setAnswer(selectedAnswer)
    }, [selectedAnswer, setAnswer])

    const handleSingleSelect = (e, { value }) => {
        if(question.questionType === 'SingleChoiceQuestion'){
            setSelectedAnswer([value])
        }else{
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
            <Card.Content>
                <Card.Header>{question.title}</Card.Header>
                <Card.Description>
                    {question.subTitle}
                </Card.Description>
                <div className={`questions ${question.answersDisplay}`}>
                    <Form>
                        {question.answers.map(a =>
                            <Form.Field>
                                <Checkbox
                                    radio={question.questionType === 'SingleChoiceQuestion'}
                                    name="answersGroup"
                                    label={a}
                                    value={a}
                                    checked={selectedAnswer.includes(a)}
                                    onChange={handleSingleSelect}
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