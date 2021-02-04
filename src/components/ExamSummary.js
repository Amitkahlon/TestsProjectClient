import React from 'react';
import { Container, Table, Header } from "semantic-ui-react";

const ExamSummary = ({ summary }) => {
    return (
        <Container>
            <Header as="h3">Summary</Header>
            <Table >
                <Table.Header>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Test name: <b>{summary.testName}</b></Table.Cell>
                        <Table.Cell>Last Submitted: <b>not avaliable</b></Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Test Code: <b>Not Avalivable</b></Table.Cell>
                        <Table.Cell>Number Of Questions Submitted: <b>{summary.submissionsCount}</b></Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Test id: <b>{summary.testId}</b></Table.Cell>
                        <Table.Cell>Number Of Correct Answers: <b>{summary.correctAnswerCount}</b></Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Test type:<b>Not Avaliable</b> </Table.Cell>
                        <Table.Cell>Final Grade: <b>{`${summary.grade}`}</b></Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Number Of Questions: <b>{summary.questionsCount}</b></Table.Cell>
                        <Table.Cell>Status: <b>{summary.status ? "Passed" : "Failed"}</b></Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Passing grade: <b>{summary.passingGrade}</b></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Container>
    )
}

export default ExamSummary
