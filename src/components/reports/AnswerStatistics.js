import React from 'react'
import { Table } from 'semantic-ui-react'

const AnswerStatistics = ({ correctAnswers, incorrectAnswers, numberOfSubmissions }) => {


    const getAnswerPrecentage = (answerCount) => {
        if (numberOfSubmissions === 0) return 0;
        const precentage = (answerCount / numberOfSubmissions) * 100;
        return precentage.toFixed(2);
    }

    return (
        <Table>
            <Table.Header>
            </Table.Header>

            <Table.Body>
                {
                    correctAnswers.map((correctAns, i) => {
                        return <Table.Row key={i}>
                            <Table.Cell>
                                <span style={{ marginRight: 5 }}>{i})</span>
                                <span style={{ color: 'green' }}>{correctAns.text} {getAnswerPrecentage(correctAns.answeredCount)}%</span>
                                <span style={{ marginLeft: 5 }}>({correctAns.answeredCount})</span>
                            </Table.Cell>
                        </Table.Row>
                    })
                }

                {
                    incorrectAnswers.map((incorrectAns, i) => {
                        return <Table.Row key={i}>
                            <Table.Cell>
                                <span style={{ marginRight: 5 }}>{i + correctAnswers.length})</span>
                                <span style={{ color: 'red' }}> {incorrectAns.text} {getAnswerPrecentage(incorrectAns.answeredCount)}% </span>
                                <span style={{ marginLeft: 5 }}>({incorrectAns.answeredCount})</span>
                            </Table.Cell>
                        </Table.Row>
                    })
                }
            </Table.Body>
        </Table>
    )
}

export default AnswerStatistics
