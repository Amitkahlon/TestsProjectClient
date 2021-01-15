import React from 'react';
import { Container } from 'semantic-ui-react'
import AddQuestionForm from "../components/AddQuestionForm";

const AddQuestionPage = () => {
    return (
        <Container>
            <h1 style={styles.header}>Add Question</h1>
            <AddQuestionForm />
        </Container>
    )
}

const styles = {
    header: {
        textAlign: 'center',
        marginBottom: 40
    },
}

export default AddQuestionPage;