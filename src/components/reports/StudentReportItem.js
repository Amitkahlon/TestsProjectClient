import React from 'react';
import { Table } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

const StudentReportItem = ({ item }) => {
    const history = useHistory();

    return (
        <Table.Row onClick={() => {
            history.push(`/reports/exam/${item._id}`)
        }}>
            <Table.Cell>{item._id}</Table.Cell>
            <Table.Cell>{item.testId._id}</Table.Cell>
            <Table.Cell>{item.testId.title}</Table.Cell>
            <Table.Cell>{item.grade}</Table.Cell>
            <Table.Cell>{item.createdAt}</Table.Cell>
        </Table.Row>
    )
}

export default StudentReportItem
