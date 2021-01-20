import React from 'react';
import { Table, TableBody, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import serverAccess from "../api/serverAccess";
import QuestionItem from "../components/QuestionItem";

const QuestionsList = ({ questions, setQuestions }) => {
    
    const deleteAction = (id) => {
        serverAccess.delete('/api/questions/' + id)
            .then((res) => {
                setQuestions(questions.filter(item => item._id !== id))
            })
            .catch((err) => console.error(err));
    }

    return (
        <Table celled striped selectable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Subtitle</Table.HeaderCell>
                    <Table.HeaderCell>Type</Table.HeaderCell>
                    <Table.HeaderCell>Display</Table.HeaderCell>
                    <Table.HeaderCell>Tags</Table.HeaderCell>
                    <Table.HeaderCell>Answers</Table.HeaderCell>
                    <Table.HeaderCell width="3"></Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <TableBody>
                {
                    questions.map(question =>
                        <QuestionItem item={question} key={question._id} deleteAction={deleteAction} />
                    )
                }
            </TableBody>

            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell colSpan='4'>
                        <Link to="/addQuestion">
                            <Button floated='right' icon labelPosition='left' primary size='small' >
                                <Icon name='plus' />
                            Add Question
                        </Button>
                        </Link>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    );
}

export default QuestionsList;