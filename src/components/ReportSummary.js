import { sum } from 'lodash';
import React from 'react'
import { Container, Header, Label, Select, List, Checkbox, Button, Table, TableHeader } from 'semantic-ui-react';

function ReportSummary({ summary }) {

    return (
        <Container className="segment">
            <Header as="h3">Summary</Header>
            <Table>
                <TableHeader></TableHeader>
                <TableHeader></TableHeader>

                <Table.Row>
                    <Table.Cell>Test name: {summary.testName}</Table.Cell>
                    <Table.Cell>Date Range: {`${summary.fromDate} - ${summary.toDate}`}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell>Test Code: Not Avalivable</Table.Cell>
                    <Table.Cell>Number of submissions: {summary.submissionsCount}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell>Test id: {summary.testId}</Table.Cell>
                    <Table.Cell>Number of respondent passed: {summary.respondentPassed}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell>Test type: {summary.testType}</Table.Cell>
                    <Table.Cell>Passing percentage: {`${summary.PassingPrecentage}%`}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell>Number of questions: {summary.questionsCount}</Table.Cell>
                    <Table.Cell>Number of average grade: {summary.averageGrade}</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell>Passing grade: {summary.passingGrade}</Table.Cell>
                    <Table.Cell>Median grade: {summary.medianGrade}</Table.Cell>
                </Table.Row>
            </Table>
        </Container>
    )
}

export default ReportSummary
