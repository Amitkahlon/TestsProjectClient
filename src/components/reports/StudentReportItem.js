import React from 'react';
<<<<<<< Updated upstream:src/components/StudentReportItem.js
import { Table, Button, Icon } from 'semantic-ui-react';
=======
import { Table } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
>>>>>>> Stashed changes:src/components/reports/StudentReportItem.js

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
