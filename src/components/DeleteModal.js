import React, { useState } from 'react';
import { Button, Grid, Label, Modal, Segment } from 'semantic-ui-react'

const DeleteModal = ({ trigger, deleteHandler }) => {

    const [open, setOpen] = useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={trigger}>

            <Modal.Header>Delete Question</Modal.Header>
            <Modal.Content>
                <p>Are you sure you want to delete this question</p>
            </Modal.Content>

            <Modal.Actions>
                <Button negative
                    onClick={(e) => setOpen(false)} >No</Button>
                <Button positive
                    onClick={(e) => {
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