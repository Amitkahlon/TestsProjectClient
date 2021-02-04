import React, { useState } from 'react'
import { Container, Header, Label, Select, List, Checkbox, Button, Table, TableBody } from 'semantic-ui-react';
import RespondentItem from './RespondentItem';

function RespondentGradesList({ respondents }) {
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

            <Table.Body>
                {
                    respondents.map(respondent =>
                        <RespondentItem item={respondent} key={respondent._id} />
                    )
                }
            </Table.Body>
        </Table>
    )
}

export default RespondentGradesList
