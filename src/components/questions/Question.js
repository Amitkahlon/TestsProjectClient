import React from 'react'
import { Card, Checkbox, Form } from 'semantic-ui-react';
import '../../styles/UserTestPage.css';
const Question = ({ question, onChange, selectedAnswer, test }) => {
    return (
        <Card fluid>
            <Card.Content textAlign={test.language === 'he' ? 'right' : 'left'}>
                <Card.Header>{question.title}</Card.Header>
                <Card.Description>
                    {question.subTitle}
                </Card.Description>
                <div className={`questions ${question.answersDisplay}`}>
                    <Form>
                        {question.answers.map(a =>
                            <Form.Field className={test.language === 'he' ? 'question hebrew' : 'question english'}>
                                <label>{a}</label>
                                <Checkbox
                                    radio={question.questionType === 'SingleChoiceQuestion'}
                                    name="answersGroup"
                                    value={a}
                                    checked={selectedAnswer.includes(a)}
                                    onChange={onChange}
                                    style={{ margin: '3px' }}
                                />
                            </Form.Field>
                        )}
                    </Form>
                </div>
            </Card.Content>
        </Card>
    )
}

export default Question
