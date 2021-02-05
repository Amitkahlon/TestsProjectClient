import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import {useLocation} from "react-router-dom";
import ExamQuestion from '../../components/exams/ExamQuestion'

const QuestionPage = (props) => {
    const location = useLocation();
    const { question } = location.state;

    console.log(question)

    return (
        <Container>
            <Header>View Question</Header>
            <ExamQuestion question={question} />
        </Container>
    )
}

export default QuestionPage;