import React from 'react';
<<<<<<< Updated upstream
import { Container } from 'semantic-ui-react'
=======
import { Container, Grid, Menu } from 'semantic-ui-react'
>>>>>>> Stashed changes
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