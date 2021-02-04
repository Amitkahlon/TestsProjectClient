import React from 'react';
import { Container, Header, Label, Select, List, Checkbox, Button, Divider, Search, Table } from 'semantic-ui-react';
import QuestionStatisticsItem from './QuestionStatisticsItem';

const QuestionStatistics = ({ questions }) => {
    console.log(questions);
    return (
        <Table celled striped selectable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Question</Table.HeaderCell>
                    <Table.HeaderCell>Number Of Submissions</Table.HeaderCell>
                    <Table.HeaderCell>%Answered Correctly</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    questions.map(question =>
                        <QuestionStatisticsItem item={question} key={question.questionId} />
                    )
                }
            </Table.Body>
        </Table>
    )
}

export default QuestionStatistics
