import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react'

const DeleteModal = ({ trigger, deleteHandler, header, message }) => {

    const [open, setOpen] = useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={trigger}>

            <Modal.Header>{header}</Modal.Header>
            <Modal.Content>
                <p>{message}</p>
            </Modal.Content>

            <Modal.Actions>
                <Button negative
                    onClick={() => setOpen(false)} >No</Button>
                <Button positive
                    onClick={() => {
                        deleteHandler()
                        setOpen(false)
                    }}>
                    Yes
            </Button>
            </Modal.Actions>
        </Modal>
    )

}

export default DeleteModal;