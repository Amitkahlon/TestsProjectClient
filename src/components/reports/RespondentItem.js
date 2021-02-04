<<<<<<< Updated upstream:src/components/RespondentItem.js
import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
=======
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react'
import RespondentItemExtra from './RespondentItemExtra'
>>>>>>> Stashed changes:src/components/reports/RespondentItem.js

const RespondentItem = ({ item }) => {
    return (
        <Table.Row>
            <Table.Cell>{item._id}</Table.Cell>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.submitDate}</Table.Cell>
            <Table.Cell>{item.questionsAnswerCount}</Table.Cell>
            <Table.Cell>{item.grade}</Table.Cell>
        </Table.Row>
    )
}

export default RespondentItem
