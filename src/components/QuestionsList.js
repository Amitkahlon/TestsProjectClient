import React, { useState, useEffect } from 'react';
import { Table, TableBody } from 'semantic-ui-react'
// import { Link } from 'react-router-dom';
import ServerAccess from "../api/ServerAccess";
import QuestionItem from "../components/QuestionItem";

const QuestionsList = () => {
    const [questions, setQuestions] = useState([]);

    // functions which is called only once when the component is mounting
    useEffect(() => {
        document.title = `Manage Questions`;
        getQuestions()
    }, []);

    const getQuestions = () => {
        ServerAccess.get('/api/questions')
            .then(({ data }) => {
                setQuestions(data)
                console.log(data);
            })
            .catch(err => console.log(err))
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
                </Table.Row>
            </Table.Header>

            <TableBody>
                {
                    questions.map(question =>
                        <QuestionItem item={question} key={question._id} />
                    )
                }
            </TableBody>
        </Table>
    );
}

export default QuestionsList;