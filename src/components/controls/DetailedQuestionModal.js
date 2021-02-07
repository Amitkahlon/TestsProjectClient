import React, { useState } from 'react';
import { Button, Divider, Icon, Modal } from 'semantic-ui-react'

const DetailedQuestionModal = ({ trigger, header, title, correctAnswers, incorrectAnswers }) => {

    const [open, setOpen] = useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={trigger}
            closeIcon
            size='small'
        >
            <Modal.Header>{header}</Modal.Header>
            <Modal.Content>
                <p style={{ flexWrap: 'wrap' }}>{title}</p>
                <Divider />
                <p color='green'>
                    <Icon name='plus' />
                    Correct answers:
                    <div>{correctAnswers.map((a, i) => <div key={i}>{a}</div>)}</div>
                </p>
                <Divider />
                <p color='red'>
                    <Icon name='close' />
                    Incorrect answers:
                    <div>{incorrectAnswers.map((a, i) => <div key={i}>{a}</div>)}</div>
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button positive
                    onClick={() => setOpen(false)}>OK</Button>
            </Modal.Actions>
        </Modal>
    )

}

export default DetailedQuestionModal;