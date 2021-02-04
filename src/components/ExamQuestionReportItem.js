import React, { useState } from 'react';
import { Button, Container, Header, Table } from "semantic-ui-react";
import AnswerDetails from './AnswerDetails';


const ExamQuestionReportItem = ({ item }) => {
    const [showAnswers, setShowAnswers] = useState(false);
    const displayAnswers = () => showAnswers ? '' : 'none'

    return (
        <>
            <Table.Row onClick={() => setShowAnswers(!showAnswers)}>
                <Table.Cell>{item.questionId}</Table.Cell>
                <Table.Cell>{item.questionTitle}</Table.Cell>
                <Table.Cell>{item.answeredCorrectly ? 'Correct' : 'Wrong'}</Table.Cell>
                <Table.Cell>Date</Table.Cell>
            </Table.Row>
            <Table.Row style={{ display: displayAnswers() }}>
                <Table.HeaderCell colSpan='5' style={{ backgroundColor: '' }}>
                    <AnswerDetails correctAnswers={item.question.correctAnswers} incorrectAnswers={item.question.incorrectAnswers} answerChoosen={item.answerChoosen} />
                </Table.HeaderCell>
            </Table.Row>
        </>
    )
}

export default ExamQuestionReportItem
