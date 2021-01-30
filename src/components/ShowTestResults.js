import React, { useState } from 'react';
import { Card, Checkbox, Form, Icon } from 'semantic-ui-react';

const ShowTestResults = ({ question }) => {
    return (
        <div>
            <Card>
                <Card.Content textAlign='left'>
                    <Card.Header>{question.question.title}</Card.Header>
                    <Card.Description>
                        {question.question.answers.map(a =>
                            <Form.Field>
                                <Checkbox
                                    radio={question.question.questionType === 'SingleChoiceQuestion'}
                                    disabled
                                    label={question.question.correctAnswer.includes(a) ? `${a} - Correct` : `${a}`}
                                    checked={question.answer.includes(a)}
                                />
                            </Form.Field>
                        )}
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>
    );
}

export default ShowTestResults;