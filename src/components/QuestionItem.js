import React from "react";
import { Table } from 'semantic-ui-react'

const QuestionItem = ({ item }) => {
  return (
    <Table.Row>
      <Table.Cell>{item.title}</Table.Cell>
      <Table.Cell>{item.subTitle}</Table.Cell>
      <Table.Cell>{item.questionType}</Table.Cell>
      <Table.Cell>{item.answersDisplay}</Table.Cell>
      <Table.Cell>{item.tags}</Table.Cell>
      <Table.Cell>{item.answers.length}</Table.Cell>
    </Table.Row>
  )
}


export default QuestionItem;