import React from 'react';
import { List, Radio, Checkbox } from 'semantic-ui-react'


const QuestionPage = ({ question }) => {

    const GetRandomAnswers = () => {
        const answers = [...question.incorrectAnswers];

        question.correctAnswers.forEach(answer => {
            const index = Math.floor(Math.random() * answers.length);
            answers.splice(index, 0, answer);
        });

        return answers;
    }

    if (question.questionType === 'SingleChoiceQuestion') {
        return <List>
            {
                GetRandomAnswers().map((answer, i) => {
                    return (
                        <>
                            <List.Item>
                                <Radio label={answer} />
                            </List.Item>
                        </>
                    )
                })
            }
        </List>
    }
    else if (question.questionType === 'MultipleSelectionQuestion') {
        return <List>
            {
                GetRandomAnswers().map((answer, i) => {
                    return (
                        <>
                            <List.Item>
                                <Checkbox label={answer} />
                            </List.Item>
                        </>
                    )
                })
            }
        </List>
    }
}

export default QuestionPage;