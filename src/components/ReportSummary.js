import { sum } from 'lodash';
import React from 'react'
import { Container, Header, Label, Select, List, Checkbox, Button, Table, TableHeader } from 'semantic-ui-react';

function ReportSummary({ summary }) {
    return (
        <Container className="segment">
            <Header as="h3">Summary</Header>
            <Table>
                <Table.Header>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Test Name: <b>{summary.testName}</b></Table.Cell>
                        <Table.Cell>Date Range: <b>{`${summary.fromDate} - ${summary.toDate}`}</b></Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Test Code: <b>Not Avalivable</b></Table.Cell>
                        <Table.Cell>Number Of Submissions: <b>{summary.submissionsCount}</b></Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Test Id: <b>{summary.testId}</b></Table.Cell>
                        <Table.Cell>Number Of Respondent Passed: <b>{summary.respondentPassed}</b></Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Test Type:<b>Not Avaliable</b> </Table.Cell>
                        <Table.Cell>Passing Percentage: <b>{`${summary.PassingPrecentage}%`}</b></Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Number Of Questions: <b>{summary.questionsCount}</b></Table.Cell>
                        <Table.Cell>Number Of Average Grade: <b>{summary.averageGrade}</b></Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>Passing Grade: <b>{summary.passingGrade}</b></Table.Cell>
                        <Table.Cell>Median Grade: <b>{summary.medianGrade}</b></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </Container>
    )
}

export default ReportSummary
