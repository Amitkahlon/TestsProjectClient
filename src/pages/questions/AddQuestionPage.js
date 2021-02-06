import React, { useState } from 'react';
import { Container } from 'semantic-ui-react'
import defaultQuestion from "../../static/defualtQuestion";
import serverAccess from "../../api/serverAccess";
import QuestionForm from '../../components/questions/QuestionForm';
import SuccessModal from '../../components/controls/SuccessModal';
import ProblemModal from '../../components/controls/ProblemModal';
import ErrorMessage from '../../components/controls/ErrorMessage';



const AddQuestionPage = () => {
    const [sucessOpen, setSucessOpen] = useState(false);
    const [problemOpen, setProblemOpen] = useState(false);
    const [errorText, setError] = useState([]);


    return (
        <Container>
            <h1 style={styles.header}>Add Question</h1>

            {
                errorText.length > 0 ? 
                <ErrorMessage errors={errorText} /> : null
            }

            <QuestionForm initialState={defaultQuestion} submitText="Submit Question" onSubmit={(question) => {
                serverAccess.post("api/questions", { question })
                    .then(res => {
                        if (res.data.question) {
                            setSucessOpen(true);
                        }
                        else {
                            setProblemOpen(true);
                            console.error(res.data.message);
                            setError(res.data.message);
                        }
                    })
                    .catch(err => {
                        setProblemOpen(true);
                        console.error(err);
                    })
            }} />


            <SuccessModal text="You added the question successfully!"
                open={sucessOpen}
                setOpen={setSucessOpen}
                okRedirectPath="/questions"
            />
            <ProblemModal text="Something went wrong when trying to add the question!"
                open={problemOpen}
                setOpen={setProblemOpen} />
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