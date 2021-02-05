import React, { useState } from 'react'
import { Table } from 'semantic-ui-react'
import AnswerStatistics from './AnswerStatistics'


const QuestionStatisticsItem = ({ item }) => {
    const [showAnswers, setShowAnswers] = useState(false);
    const displayAnswers = () => showAnswers ? '' : 'none'

    const getAnsweredCorrectlyPrecentage = () => {
        if (item.numberOfSubmissions === 0) {
            return 0;
        } else {
            let precentage = (item.answeredCorrectly / item.numberOfSubmissions) * 100;
            return precentage.toFixed(2);
        }
    }

    return (
        <>
            <Table.Row onClick={() => setShowAnswers(!showAnswers)}>
                <Table.Cell>{item.questionId}</Table.Cell>
                <Table.Cell>{item.questionTitle}</Table.Cell>
                <Table.Cell>{item.numberOfSubmissions}</Table.Cell>
                <Table.Cell>{getAnsweredCorrectlyPrecentage()}%</Table.Cell>
            </Table.Row>
            <Table.Row style={{ display: displayAnswers() }}>
                <Table.HeaderCell colSpan='5' style={{ backgroundColor: 'coral' }}>
                    <AnswerStatistics correctAnswers={item.correctAnswers} incorrectAnswers={item.incorrectAnswers} numberOfSubmissions={item.numberOfSubmissions} />
                </Table.HeaderCell>
            </Table.Row>
        </>
    )
}

export default QuestionStatisticsItem
