import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'

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
