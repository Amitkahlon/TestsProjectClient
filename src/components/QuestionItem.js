import React from "react";
import { Table, Button, Icon } from 'semantic-ui-react'
import DeleteModal from "../components/DeleteModal";
import { Link } from 'react-router-dom';



const QuestionItem = ({ item, deleteAction }) => {

  return (
    <Table.Row>
      <Table.Cell>{item.title}</Table.Cell>
      <Table.Cell>{item.subTitle}</Table.Cell>
      <Table.Cell>{item.questionType}</Table.Cell>
      <Table.Cell>{item.answersDisplay}</Table.Cell>
      <Table.Cell>{item.tags.join(', ')}</Table.Cell>
      <Table.Cell>{item.correctAnswers.length + item.incorrectAnswers.length}</Table.Cell>
      <Table.Cell>
        <Link to={{
          pathname: "/questions/view",
          state: {
            question: item
          }
        }}>
          <Button size="tiny" color="blue">
            <Icon name='bars' />
          View
          </Button>
        </Link>
        <Button size="tiny" color="black">
          <Icon name='edit' />
          Edit
          </Button>
        <DeleteModal
          deleteHandler={() => deleteAction(item._id)}
          message="Are you sure you want to delete this question?"
          header="You are about to delete this question"
          trigger={<Button size="tiny" color="red">
            <Icon name='delete' />
          Delete
          </Button>} />
      </Table.Cell>
    </Table.Row>
  )
}


export default QuestionItem;