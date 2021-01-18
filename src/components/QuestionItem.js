import React from "react";
import { Table, Button, Icon } from 'semantic-ui-react'

const QuestionItem = ({ item, deleteAction }) => {


  
  return (
    <Table.Row>
      <Table.Cell>{item.title}</Table.Cell>
      <Table.Cell>{item.subTitle}</Table.Cell>
      <Table.Cell>{item.questionType}</Table.Cell>
      <Table.Cell>{item.answersDisplay}</Table.Cell>
      <Table.Cell>{item.tags}</Table.Cell>
      <Table.Cell>{item.answers.length}</Table.Cell>
      <Table.Cell>
        <Button size="tiny" color="blue">
          <Icon name='bars' />
          View
          </Button>
        <Button size="tiny" color="black">
          <Icon name='edit' />
          Edit
          </Button>
        <Button size="tiny" color="red" onClick={() => deleteAction(item._id)}>
          <Icon name='delete' />
          Delete
          </Button>
      </Table.Cell>
    </Table.Row>
  )
}


export default QuestionItem;