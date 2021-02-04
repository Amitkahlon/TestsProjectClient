import React from 'react'
import { Form, Container, Header, Label, Select, List, Checkbox, Button, Icon, Table } from 'semantic-ui-react';

const RespondentItemExtra = ({ data }) => {
    return (
        <Table>
            <Table.Header>

            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell>Class: <b>{data.class}</b></Table.Cell>
                    <Table.Cell>Started: <b>{data.createdAt}</b></Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell>Email: <b>{data.studentEmail}</b></Table.Cell>
                    <Table.Cell>Student ID: <b>{data.studentId}</b></Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export default RespondentItemExtra
