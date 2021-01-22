import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import {
    Link
  } from "react-router-dom";

const SuccessModal = ({ text, onOpenHandler, onCloseHandler, trigger, open, setOpen, okRedirectPath }) => {


    const OkButton = () => {
        if (okRedirectPath) {
            return (
                <Link to={okRedirectPath}>
                    <Button onClick={() => { setOpen(false) }}>OK</Button>
                </Link>
            )
        }
        else {
            return <Button onClick={() => { setOpen(false) }}>OK</Button>
        }
    }


    return (
        <Modal
            centered={false}
            open={open}
            onClose={() => {
                setOpen(false);
                if (onCloseHandler) {
                    onCloseHandler();
                }
            }}
            onOpen={() => {
                if (onOpenHandler) {
                    onOpenHandler();
                }
                setOpen(true);
            }}
            trigger={trigger}
        >
            <Modal.Header style={{backgroundColor: '#00ff00'}}>You Did It!</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    {text}
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <OkButton />
            </Modal.Actions>
        </Modal>
    )
}

export default SuccessModal;
