import React from 'react'
import { Message, Container } from 'semantic-ui-react'

const ErrorMessage = ({ errors }) => {
    return (
        <Message error>
            <Container textAlign='left'>
                {errors.map(e => (
                    <Message.Item>{e.message}</Message.Item>
                ))}
            </Container>
        </Message>
    )
}

export default ErrorMessage
