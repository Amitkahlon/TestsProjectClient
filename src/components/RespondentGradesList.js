import React, { useState } from 'react'
import { Container, Header, Label, Select, List, Checkbox, Button, Table, TableBody } from 'semantic-ui-react';
import RespondentItem from './RespondentItem';

const initalRespondent = [
    { _id: "d", name: "Bart Simpson", submitDate: "1/1/2020", questionsAnswerCount: 15, grade: 75 },
    { _id: "dsadas1234", name: "Bart Simpson", submitDate: "1/1/2020", questionsAnswerCount: 15, grade: 75 },
    { _id: "dsadas1234", name: "Bart Simpson", submitDate: "1/1/2020", questionsAnswerCount: 15, grade: 75 },
    { _id: "dsadas1234", name: "Bart Simpson", submitDate: "1/1/2020", questionsAnswerCount: 15, grade: 75 },
    { _id: "dsadas1234", name: "Bart Simpson", submitDate: "1/1/2020", questionsAnswerCount: 15, grade: 75 },
    { _id: "dsadas1234", name: "Bart Simpson", submitDate: "1/1/2020", questionsAnswerCount: 15, grade: 75 },
    { _id: "dsadas1234", name: "Bart Simpson", submitDate: "1/1/2020", questionsAnswerCount: 15, grade: 75 },
    { _id: "dsadas1234", name: "Bart Simpson", submitDate: "1/1/2020", questionsAnswerCount: 15, grade: 75 },

]

function RespondentGradesList() {
const [respondent, setRespondent] = useState(initalRespondent)

    return (
        <Table celled striped selectable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Respondent</Table.HeaderCell>
                    <Table.HeaderCell>Submit Date</Table.HeaderCell>
                    <Table.HeaderCell>Number Of Questions Answered</Table.HeaderCell>
                    <Table.HeaderCell>Grade</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <TableBody>
                {
                    respondent.map(respondent =>
                        <RespondentItem item={respondent} key={respondent._id} />
                    )
                }
            </TableBody>
        </Table>
    )
}

export default RespondentGradesList
