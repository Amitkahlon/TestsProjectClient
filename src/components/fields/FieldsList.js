import React, { useState } from 'react';
import { Button, Form, Icon, Message, Modal, Table } from 'semantic-ui-react';
import serverAccess from '../../api/serverAccess';
import DeleteModal from '../controls/DeleteModal';

const FieldsList = ({ fields, setFields }) => {
    const [errorMessage, setErrorMessage] = useState(null)
    const [isOpen, setIsOpen] = useState(null)
    const [field, setField] = useState({})

    const handleDelete = async (id) => {
        const res = await serverAccess.delete(`/api/fields/${id}`)
        if (res) {
            if (res.data.field) {
                setFields(fields.filter(f => f._id !== id));
            } else {
                setErrorMessage(res.data.message)
            }
        }
    }

    const handleEditField = async (id) => {
        const res = await serverAccess.put(`/api/fields/${id}`, {field: field})
        if (res) {
            if (res.data.field) {
                setIsOpen(false)
                setFields(fields.filter(f => f._id !== id))
                setFields(pf => [...pf, res.data.field])
            } else {
                setErrorMessage(res.data.message)
            }
        }
    }
    let tableContent = (!fields.message || fields.length > 0) ?
        <>
            {fields.map(field => (
                <Table.Row key={field._id}>
                    <Table.Cell>{field.title}</Table.Cell>
                    <Table.Cell collapsing>
                        <Modal
                            size='tiny'
                            onClose={() => setIsOpen(false)}
                            onOpen={() => setIsOpen(true)}
                            open={isOpen}
                            trigger={<Button size="small" color="linkedin">
                                <Icon name='edit' />
                                        Edit
                                    </Button>}
                        >
                            <Modal.Header>Edit field</Modal.Header>
                            <Modal.Content>
                                {errorMessage && <Message error>
                                    <Message.Header>Something went wrong...</Message.Header>
                                    <Message.Content>{errorMessage}</Message.Content>
                                </Message>}
                                <Form>
                                    <Form.Input
                                        defaultValue={field.title}
                                        onChange={(e) => setField(f => ({ ...f, title: e.target.value }))}
                                        label='Title'
                                    />
                                </Form>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='black' onClick={() => setIsOpen(false)}>
                                    Cancel
                                </Button>
                                <Button
                                    content="Done"
                                    onClick={() => handleEditField(field._id)}
                                    positive
                                />
                            </Modal.Actions>
                        </Modal>
                        <DeleteModal
                            deleteHandler={() => handleDelete(field._id)}
                            message='Are you sure you want to delete this field?'
                            header='You are about to delete this field'
                            trigger={<Button size="small" color="youtube">
                                <Icon name='delete' />
                                    Delete
                                </Button>}
                        />
                    </Table.Cell>
                </Table.Row>
            ))}
        </>
        :
        <>
            <Table.Row>
                <Table.Cell textAlign='center'>
                    <Icon name='minus circle' />
                    {fields.message}
                </Table.Cell>
            </Table.Row>
        </>
    return (
        <>
            {errorMessage && <Message error>
                <Message.Header>Something went wrong...</Message.Header>
                <Message.Content>{errorMessage}</Message.Content>
            </Message>}
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
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

export default FieldsList;