import React from 'react'
import { Card, Checkbox, Form } from 'semantic-ui-react'

const Question = ({ question, onChange, selectedAnswer }) => {
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{question.title}</Card.Header>
                <Card.Description>
                    {question.subTitle}
                </Card.Description>
                <div className={`questions ${question.answersDisplay}`}>
                    <Form>
                        {question.answers.map((a, i) =>
                            <Form.Field key={i}>
                                <Checkbox
                                    radio={question.questionType === 'SingleChoiceQuestion'}
                                    name="answersGroup"
                                    label={a}
                                    value={a}
                                    checked={selectedAnswer.includes(a)}
                                    onChange={onChange}
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
