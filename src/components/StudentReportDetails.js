import React from 'react'
import { Container, Button, Icon, Table, TableHeader, TableBody } from 'semantic-ui-react';
import StudentReportItem from './StudentReportItem';



const StudentReportDetails = ({ item }) => {
    return (
        <Table celled striped selectable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Last Activity</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <TableBody>
                <Table.Row>
                    <Table.Cell>{item._id}</Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.email}</Table.Cell>
                    <Table.Cell>{item.lastActivity}</Table.Cell>
                </Table.Row>
            </TableBody>
        </Table>
    )
}

export default StudentReportDetails

{/*  */ }
