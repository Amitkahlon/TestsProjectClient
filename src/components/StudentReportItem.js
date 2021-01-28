import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';

const StudentReportItem = ({ item }) => {
    return (
        <Table.Row>
            <Table.Cell>{item.instance}</Table.Cell>
            <Table.Cell>{item._id}</Table.Cell>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.grade}</Table.Cell>
            <Table.Cell>{item.lastActivity}</Table.Cell>
        </Table.Row>
    )
}

export default StudentReportItem
