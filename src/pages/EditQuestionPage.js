import React, { useState, useEffect } from 'react'
import { Container, Header } from 'semantic-ui-react'
import QuestionForm from '../components/QuestionForm'
import serverAccess from "../api/serverAccess";
import { useLocation } from "react-router-dom";
import _ from 'lodash';
import ProblemModal from '../components/controls/ProblemModal';
import SuccessModal from '../components/controls/SuccessModal';


const EditQuestionPage = () => {
    const location = useLocation();
    const [sucessOpen, setSucessOpen] = useState(false);
    const [problemOpen, setProblemOpen] = useState(false);
    const [question, setQuestion] = useState({});
    const [errorText, setError] = useState('');

    useEffect(() => {
        const i = getInitialState(location.state.question)
        setQuestion(i);
        return () => {
        }
    }, []);


    const getInitialState = () => {
        const item = location.state.question;

        const question = {
            _id: item._id,
            title: item.title,
            subTitle: item.subTitle,
            questionType: item.questionType,
            answersDisplay: item.answersDisplay,
            answersIdCounter: 0
        }

        const answers = []
        item.correctAnswers.forEach(answer => {
            answers.push({ id: question.answersIdCounter, text: answer, isCorrect: true });
            question.answersIdCounter++;
        });

        item.incorrectAnswers.forEach(answer => {
            answers.push({ id: question.answersIdCounter, text: answer, isCorrect: false });
            question.answersIdCounter++;
        });

        question.answers = answers;

        question.tags = item.tags.map(tag => {
            return { id: tag, text: tag }
        })

        return question;
    }

    return (
        <Container>
            <Header textAlign="center">Edit Question Page</Header>

            {
                !_.isEmpty(question) ? (
                    <QuestionForm initialState={question} submitText="Edit Question" onSubmit={(question) => {
                        serverAccess.put("api/questions/" + question._id, { question })
                            .then(res => {
                                if (res.data.question) {
                                    setSucessOpen(true);
                                }
                                else {
                                    setProblemOpen(true);
                                    console.error(res.data.message);
                                    setError(res.data.message)
                                }
                            })
                            .catch(err => {
                                setProblemOpen(true);
                                console.error(err);
                            })
                    }} />
                ) : (
                        <p>Loading...</p>
                    )}

            <p style={{ marginTop: "30px", color: "red", fontSize: "20px" }}>{errorText}</p>

            <SuccessModal text="You successfully edit the question" open={sucessOpen} setOpen={setSucessOpen} okRedirectPath="/questions"/>
            <ProblemModal text="Something went wrong when trying to delete the question, question might not be deleted" open={problemOpen} setOpen={setProblemOpen} />
        </Container>
    )
}



export default EditQuestionPage
