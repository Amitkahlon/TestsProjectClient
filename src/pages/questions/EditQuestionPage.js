import React, { useState, useEffect, useCallback } from 'react'
import { Container, Header } from 'semantic-ui-react'
import QuestionForm from '../../components/questions/QuestionForm'
import serverAccess from "../../api/serverAccess";
import { useLocation } from "react-router-dom";
import _ from 'lodash';
import ProblemModal from '../../components/controls/ProblemModal';
import SuccessModal from '../../components/controls/SuccessModal';
import ErrorMessage from '../../components/controls/ErrorMessage';


const EditQuestionPage = () => {
    const location = useLocation();
    const [sucessOpen, setSucessOpen] = useState(false);
    const [problemOpen, setProblemOpen] = useState(false);
    const [question, setQuestion] = useState({});
    const [errorText, setError] = useState('');

    const getInitialState = useCallback(() => {
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
    }, [location.state.question])
    
    useEffect(() => {
        const i = getInitialState(location.state.question)
        setQuestion(i);
        return () => {
        }
    }, [location.state.question, getInitialState]);

    return (
        <Container>
            <Header textAlign="center">Edit Question Page</Header>
            {
                errorText.length > 0 ?
                    <ErrorMessage errors={errorText} /> : null
            }


            {
                !_.isEmpty(question) ? (
                    <QuestionForm initialState={question} submitText="Edit Question" onSubmit={(question) => {
                        const id = question._id;
                        delete question._id;
                        serverAccess.put("api/questions/" + id, { question })
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

            <SuccessModal text="You successfully edit the question" open={sucessOpen} setOpen={setSucessOpen} okRedirectPath="/questions"/>
            <ProblemModal text="Something went wrong when trying to delete the question, question might not be editted" open={problemOpen} setOpen={setProblemOpen} />
        </Container>
    )
}



export default EditQuestionPage
