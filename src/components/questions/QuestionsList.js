import React, { useState } from 'react';
import { Table, TableBody, Button, Icon, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import serverAccess from "../../api/serverAccess";
import QuestionListItem from './QuestionListItem';
import ProblemModal from '../controls/ProblemModal';
import SuccessModal from '../controls/SuccessModal';
import _ from 'lodash';


const QuestionsList = ({ questions, setQuestions }) => {
    const [sucessOpen, setSucessOpen] = useState(false);
    const [problemOpen, setProblemOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState(0)

    const getFilteredQuestionsByPage = (pageNumber) => {
        const filteredQuestions = questions.slice(pageNumber * 10, (pageNumber * 10) + 10);
        return filteredQuestions;
    }

    const renderPages = () => {
        const pageCount = questions.length / 10;

        return (
            <List horizontal>
                {
                    _.range(pageCount).map(num => {
                         return <List.Item>
                            <Button onClick={() => setSelectedPage(num)}>{num}</Button>
                        </List.Item>
                    })
                }
            </List>
        )
    }
    

    const deleteAction = (id) => {
        serverAccess.delete('/api/questions/' + id)
            .then((res) => {
                console.log(res);
                if(res.data.question){
                    setSucessOpen(true);
                    setQuestions(questions.filter(item => item._id !== id));
                }
                else {
                    setProblemOpen(true);
                }
            })
            .catch((err) =>  {
                setProblemOpen(true);
                console.error(err);
            });
    }

    return (
        <>
            <Table celled striped selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Subtitle</Table.HeaderCell>
                        <Table.HeaderCell>Type</Table.HeaderCell>
                        <Table.HeaderCell>Display</Table.HeaderCell>
                        <Table.HeaderCell>Tags</Table.HeaderCell>
                        <Table.HeaderCell>Answers</Table.HeaderCell>
                        <Table.HeaderCell>Last Change</Table.HeaderCell>
                        <Table.HeaderCell width="3"></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <TableBody>
                    {
                        getFilteredQuestionsByPage(selectedPage).map(question =>
                            <QuestionListItem item={question} key={question._id} deleteAction={deleteAction} />
                        )
                    }
                </TableBody>

                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell />
                        <Table.HeaderCell />
                        <Table.HeaderCell />

                        <Table.HeaderCell colSpan='4'>
                            <Link to="/questions/add">
                                <Button floated='right' icon labelPosition='left' primary size='small' >
                                    <Icon name='plus' />
                            Add Question
                        </Button>
                            </Link>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>

            {
                renderPages()
            }

            <SuccessModal text="You successfully deleted a question" open={sucessOpen} setOpen={setSucessOpen} />
            <ProblemModal text="Something went wrong when trying to delete the question, question might not be deleted" open={problemOpen} setOpen={setProblemOpen} />
        </>
    );
}

export default QuestionsList;