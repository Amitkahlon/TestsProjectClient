import React, { useContext, useEffect, useState } from 'react';
import { Table, Icon, Button, Message, Input } from 'semantic-ui-react';
import { ContextValues } from '../context/AppContext';
import serverAccess from '../api/serverAccess'
import { Link } from 'react-router-dom';
import DeleteModal from '../components/controls/DeleteModal';

const TestsList = ({ tests, setTests }) => {
    const { admin } = useContext(ContextValues)
    const [errorMessage, setErrorMessage] = useState(null)
    const [search, setSearch] = useState('')
    const [filteredTests, setFilteredTests] = useState(tests)

    useEffect(() => {
        setFilteredTests(tests)
    }, [tests, setFilteredTests])

    const handleDelete = async (id) => {
        const res = await serverAccess.delete(`/api/tests/${id}`)
        if (res) {
            if (res.data.test) {
                setTests(tests.filter(t => t._id !== id))
            } else {
                setErrorMessage(res.data.message)
            }
        }
    }

    const handleSearch = (value) => {
        setSearch(value)
        if (value === '') {
            setFilteredTests(tests)
        } else {
            setFilteredTests(tests.filter(t => t.title.toLowerCase().includes(value.toLowerCase())))
        }
    }

    let tableContent = !tests.message ? <>
        {filteredTests.map(test => (
            <Table.Row>
                <Table.Cell >
                    <Icon name='lab' /> {test.title.length > 30 ? test.title.substring(0, 30) + '...' : test.title}
                </Table.Cell>
                <Table.Cell>{test.authorEmail}</Table.Cell>
                <Table.Cell>{test.passGrade}</Table.Cell>
                <Table.Cell>{test.showCorrectAnswers ? 'Yes' : 'No'}</Table.Cell>
                <Table.Cell collapsing textAlign='center'>
                    {test.questions.length}
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    <div className='line testbtns'>
                        <Link to={{
                            pathname: '/tests/edit',
                            state: test
                        }}>
                            <Button size='mini' color='linkedin'>
                                <Icon name='edit' />
                                Edit
                            </Button>
                        </Link>
                        <DeleteModal
                            deleteHandler={() => handleDelete(test._id)}
                            message="Are you sure you want to delete this test?"
                            header="You are about to delete this test"
                            trigger={<Button size="mini" color="red">
                                <Icon name='delete' />
                                Delete
                                </Button>} />
                    </div>
                </Table.Cell>
            </Table.Row>
        ))}
    </>
        :
        <Table.Row>
            <Table.Cell textAlign='center'>
                <Icon name='minus circle' />
                {tests.message}
            </Table.Cell>
        </Table.Row>

    return (
        <>
            {errorMessage && <Message error>
                <Message.Header>Something went wrong...</Message.Header>
                <Message.Content>{errorMessage}</Message.Content>
            </Message>}
            <Input style={{ width: '30%' }} onChange={(e) => handleSearch(e.target.value)} value={search} placeholder='Search...' icon='search' />
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='6'>{admin.field.title} Tests list</Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Author</Table.HeaderCell>
                        <Table.HeaderCell>Pass grade</Table.HeaderCell>
                        <Table.HeaderCell>Show correct answers</Table.HeaderCell>
                        <Table.HeaderCell>Questions</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {tableContent}
                </Table.Body>
            </Table>
        </>
    );
}

export default TestsList;