import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import Question from '../components/Question'
import {useLocation} from "react-router-dom";

const QuestionPage = (props) => {
    const location = useLocation();
    const { question } = location.state;

    console.log(question)

    return (
        <Container>
            <Header>View Question</Header>
            <Question question={question} />
        </Container>
    )
}

export default QuestionPage;