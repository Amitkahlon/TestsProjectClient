import React from 'react';
import QuestionsList from "../components/QuestionsList";

const QuestionPage = () => {
    return (
        <div>
            <h1 style={styles.header}>Manage Questions</h1>
            <QuestionsList />
        </div>
    )
}

const styles = {
    header: {
        textAlign: 'center',
        marginBottom: 40
    }
}

export default QuestionPage;