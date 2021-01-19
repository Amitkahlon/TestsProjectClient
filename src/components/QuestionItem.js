import React from "react";
import { Table, Button, Icon } from 'semantic-ui-react'
import DeleteModal from "../components/DeleteModal";

const QuestionItem = ({ item, deleteAction }) => {

  return (
    <Table.Row>
      <Table.Cell>{item.title}</Table.Cell>
      <Table.Cell>{item.subTitle}</Table.Cell>
      <Table.Cell>{item.questionType}</Table.Cell>
      <Table.Cell>{item.answersDisplay}</Table.Cell>
      <Table.Cell>{item.tags}</Table.Cell>
      <Table.Cell>{item.correctAnswers.length + item.incorrectAnswers.length}</Table.Cell>
      <Table.Cell>
        <Button size="tiny" color="blue">
          <Icon name='bars' />
          View
          </Button>
        <Button size="tiny" color="black">
          <Icon name='edit' />
          Edit
          </Button>
        <DeleteModal
          deleteHandler={() => deleteAction(item._id)}
          trigger={<Button size="tiny" color="red">
            <Icon name='delete' />
          Delete
          </Button>} />
        {/*  */}
      </Table.Cell>
    </Table.Row>
  )
}


export default QuestionItem;