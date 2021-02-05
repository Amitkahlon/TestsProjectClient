import React from 'react';
import ExamQuestionReportItem from "./ExamQuestionReportItem";
import { Button, Container, Header, Table } from "semantic-ui-react";

const ExamReport = ({ questionsDetails, style }) => {
    return (
        <Container style={style}>
            <Header as="h3">Details</Header>
            <p>Click a question to see which of its answers were selected and whether they were correct, or click "Expand All" to see it for all questions.</p>
            <Button>Expand All</Button>

            <Table celled striped selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Question</Table.HeaderCell>
                        <Table.HeaderCell>Answered Correctly?</Table.HeaderCell>
                        <Table.HeaderCell>Date Answered</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        questionsDetails.map((questionDetail) =>
                            <ExamQuestionReportItem item={questionDetail} key={questionDetail.questionId} />
                        )
                    }
                </Table.Body>
            </Table>
        </Container>
    )
}

export default ExamReport
