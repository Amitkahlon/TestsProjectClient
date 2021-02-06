import React, { useContext, useEffect, useState } from 'react';
import { Card, Checkbox, Form } from 'semantic-ui-react';
import { ContextValues } from '../../context/AppContext';
import '../../styles/UserTestPage.css'
import Question from '../questions/Question';

const ExamQuestion = ({ question, setAnswer, questionNumber }) => {
    const { user } = useContext(ContextValues)
    const [selectedAnswer, setSelectedAnswer] = useState([]);

    useEffect(() => {
        if (user.exam.questions[questionNumber].answer && user.exam.questions[questionNumber].answer.length > 0) {
            setSelectedAnswer(user.exam.questions[questionNumber].answer)
        } else {
            setSelectedAnswer([])
        }
    }, [user.exam.questions, questionNumber])

    useEffect(() => {
        setAnswer(selectedAnswer)
    }, [selectedAnswer, setAnswer])

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

    return (
        <Question question={question} onChange={handleSingleSelect} selectedAnswer={selectedAnswer} />
    );
}

export default ExamQuestion;