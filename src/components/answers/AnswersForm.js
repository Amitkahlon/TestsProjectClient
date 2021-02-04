import React from "react";
import SingleAnswerForm from "../questions/SingleAnswerForm";
import MultiAnswerForm from "./MultiAnswerForm";


const AnswersForm = ({ question, dispatch }) => {
    if (question.questionType === 'SingleChoiceQuestion') {
        const correctAnswer = question.answers.find((answer) => answer.isCorrect === true);
        return (
            question.answers.map((answerItem, i) =>
                <SingleAnswerForm answerItem={answerItem} key={answerItem.id} index={i} removeAnswer={(id) => dispatch({ type: "REMOVE_ANSWER", payload: id })}
                    setText={(text) => dispatch({ type: "SET_ANSWER_TEXT", payload: { text, id: answerItem.id } })}
                    setCorrectAnswer={() => dispatch({ type: "SET_CORRECT_ANSWER", payload: { id: answerItem.id } })}
                    correctAnswer={correctAnswer}
                />
            )
        )
    } else if (question.questionType === 'MultipleSelectionQuestion') {
        return (
            question.answers.map((answerItem, i) =>
                <MultiAnswerForm answerItem={answerItem} key={answerItem.id} index={i} removeAnswer={(id) => dispatch({ type: "REMOVE_ANSWER", payload: id })}
                    setText={(text) => dispatch({ type: "SET_ANSWER_TEXT", payload: { text, id: answerItem.id } })}
                    setIsCorrect={(isCorrect) => dispatch({ type: "SET_ANSWER_ISCORRECT", payload: { isCorrect, id: answerItem.id } })} />
            )
        )
    } else {
        return <p color="red">error, question type is missing or incorrect</p>
    }
}

export default AnswersForm;