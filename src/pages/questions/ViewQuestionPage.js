import React, { useState } from 'react';
import { Button, Container, Header } from 'semantic-ui-react';
import { useLocation, useHistory } from "react-router-dom";
import Question from '../../components/questions/Question';

const QuestionPage = (props) => {
    const [selectedAnswer, setSelectedAnswer] = useState([]);
    const history = useHistory();

    const handleSingleSelect = (e, { value }) => {
        if (question.questionType === 'SingleChoiceQuestion') {
            setSelectedAnswer([value])
        } else {
            if (selectedAnswer.includes(value)) {
                setSelectedAnswer(selectedAnswer.filter(a => a !== value))
            }
            else {
                setSelectedAnswer(prev => ([...prev, value]))
            }
        }
    }

    const location = useLocation();
    const { question } = location.state;

    question.answers = question.correctAnswers.concat(question.incorrectAnswers).sort(function (a, b) {
        if (a < b) { return -1; }
        if (a > b) { return 1; }
        return 0;
    })

    return (
        <Container>
            <Header>View Question</Header>
            <Question question={question} onChange={handleSingleSelect} selectedAnswer={selectedAnswer} test={{ language: "en" }} />
            <Button onClick={() => {
                history.goBack();
            }}>Go Back</Button>
        </Container>
    )
}

export default QuestionPage;