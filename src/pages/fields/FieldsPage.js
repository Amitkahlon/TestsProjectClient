import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form, Header, Icon, Message, Modal } from 'semantic-ui-react';
import serverAccess from '../../api/serverAccess';
import FieldsList from '../../components/fields/FieldsList';
import { ContextValues } from '../../context/AppContext';

const FieldsPage = () => {
    const { admin } = useContext(ContextValues)
    const [fields, setFields] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [field, setField] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        serverAccess.get('/api/fields').then(res => setFields(res.data.fields)).catch(err => console.log(err))
    }, [])

    const handleAddField = async () => {
        const res = await serverAccess.post('/api/fields', { field: field })
        if (res) {
            if (res.data.field) {
                setFields(pf => [...pf, res.data.field])
                setIsOpen(false)
            } else if (res.data.message) {
                console.log(res.data.message);
                setErrorMessage(res.data.message);
            }
        }
    }

    return (
        <Container textAlign='center'>
            <Header as='h1'>{admin.organization.name}'s Fields</Header>
            <Container textAlign='right'>
                <Modal
                    size='tiny'
                    onClose={() => setIsOpen(false)}
                    onOpen={() => setIsOpen(true)}
                    open={isOpen}
                    trigger={<Button primary>
                        <Icon name='add' />
                        Add field
                    </Button>}
                >
                    <Modal.Header>Add new field</Modal.Header>
                    <Modal.Content>
                        {errorMessage && <Message error>
                            <Message.Header>Something went wrong...</Message.Header>
                            <Message.Content>{errorMessage}</Message.Content>
                        </Message>}
                        <Form>
                            <Form.Input
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
                            content="Add"
                            labelPosition='right'
                            icon='add'
                            onClick={handleAddField}
                            positive
                        />
                    </Modal.Actions>
                </Modal>
            </Container>
            <FieldsList fields={fields} setFields={setFields} />
        </Container>
    );
}

export default FieldsPage;