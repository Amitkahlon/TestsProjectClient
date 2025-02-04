import React, { useContext, useEffect, useState } from 'react';
import { Table, Icon, Button, Message, Input, Popup } from 'semantic-ui-react';
import { ContextValues } from '../../context/AppContext';
import DeleteModal from '../controls/DeleteModal';
import serverAccess from '../../api/serverAccess'
import { Link } from 'react-router-dom';

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

    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear(),
            hours = d.getHours(),
            minutes = d.getMinutes();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-') + ' ' + [hours, minutes].join(':');
    }

    const getTestUrl = (id) => {
        let hostname = ''
        if(process.env.NODE_ENV === 'development'){
            hostname = `${window.location.host}`
        }else{
            hostname = `${window.location.hostname}`
        }
        let url = `${window.location.protocol}//${hostname}/sign/${id}`;
        return url;
    }

    const handleCopyPopup = (id) => {
        navigator.clipboard.writeText(getTestUrl(id))
    }

    let tableContent = !tests.message ? <>
        {filteredTests.map(test => (
            <Table.Row key={test._id}>
                <Table.Cell >
                    <Icon name='lab' /> {test.title.length > 30 ? test.title.substring(0, 30) + '...' : test.title}
                </Table.Cell>
                <Table.Cell>{test.authorEmail}</Table.Cell>
                <Table.Cell>{test.passGrade}</Table.Cell>
                <Table.Cell>{test.showCorrectAnswers ? 'Yes' : 'No'}</Table.Cell>
                <Table.Cell collapsing textAlign='center'>
                    {test.questions.length}
                </Table.Cell>
                <Table.Cell>
                    {formatDate(test.modifiedAt)}
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
                                </Button>}
                        />
                        <Popup
                            trigger={<Button size='mini'>Copy Link</Button>}
                            content='Copied!'
                            on='click'
                            onOpen={() => handleCopyPopup(test._id)}
                        />
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
                        <Table.HeaderCell colSpan='7'>{admin.field.title} Tests list</Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Author</Table.HeaderCell>
                        <Table.HeaderCell>Pass grade</Table.HeaderCell>
                        <Table.HeaderCell>Show correct answers</Table.HeaderCell>
                        <Table.HeaderCell>Questions</Table.HeaderCell>
                        <Table.HeaderCell>Last change</Table.HeaderCell>
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