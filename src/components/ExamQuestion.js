import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Checkbox, Radio } from 'semantic-ui-react';
import '../styles/UserTestPage.css'

const ExamQuestion = ({ question, setAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState([])

    useEffect(() => {
        setAnswer(selectedAnswer)
    }, [selectedAnswer])

    const generateSelection = () => {
        switch (question.questionType) {
            case 'SingleChoiceQuestion':
                return (
                    <>
                        {
                            question.answers.map(a => (
                                <Radio
                                    name='agroup'
                                    label={a}
                                    value={a}
                                    checked={selectedAnswer.find(an => an === a)}
                                    onChange={handleSelectAnswer}
                                />
                            ))
                        }
                    </>
                );
            case 'MultiChoiceQuestion':
                return (
                    <>
                        {
                            question.answers.map(a => (
                                <Checkbox
                                    name='agroup'
                                    label={a}
                                    value={a}
                                    checked={selectedAnswer.find(an => an === a)}
                                    onChange={handleSelectAnswer}
                                />
                            ))
                        }
                    </>
                )
            default:
                break;
        }
    }

    const handleSelectAnswer = (e, { value }) => {
        console.log(selectedAnswer);
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
            <Card.Content>
                <Card.Header>{question.title}</Card.Header>
                <Card.Description>
                    {question.description}
                </Card.Description>
                <div className={`questions ${question.answersDisplay}`}>
                    {generateSelection()}
                </div>
            </Card.Content>
        </Card>
    );
}

export default ExamQuestion;