const questionReducer = (state, action) => {
    let newState = { ...state };

    switch (action.type) {
        case 'SET_TITLE':
            newState.title = action.payload;
            break;
        case 'SET_SUBTITLE':
            newState.subTitle = action.payload;
            break;
        case 'SET_QUESTIONTYPE':
            if (state.questionType === 'MultipleSelectionQuestion') {
                newState.answers.forEach(answer => {
                    answer.isCorrect = false;
                })
                if (newState.answers[0]) {
                    newState.answers[0].isCorrect = true;
                }
            }
            newState.questionType = action.payload;
            break;
        case 'SET_ANSWERDISPLAY':
            newState.answersDisplay = action.payload;
            break;
        case 'ADD_QUESTION':
            newState.answers = [...state.answers, { id: state.answersIdCounter, text: "", isCorrect: false }]
            newState.answersIdCounter++;
            console.log(newState.answersIdCounter);
            break;
        case 'REMOVE_ANSWER':
            if (newState.answers.length > 1) {
                let id = action.payload;
                //to not cause erorr when removing a correct answer from a single choice question.
                //also when tried to use splice it cause error so im using filter instead(worst complexity)
                const index = state.answers.findIndex((answer => answer.id === id));
                if (state.questionType === 'SingleChoiceQuestion' && state.answers[index].isCorrect === true) {
                    newState.answers = newState.answers.filter((answer) => answer.id !== id);
                    newState.answers[0].isCorrect = true;
                }
                else {
                    newState.answers = newState.answers.filter((answer) => answer.id !== id)
                }
            }
            break;
        case "SET_TAGS":
            let newTags = action.payload;
            newState.tags = newTags;
            break;
        case "SET_ANSWER_TEXT": {
            let { payload } = action;
            let { answers } = state;
            let index = answers.findIndex((answer => answer.id === payload.id));
            newState.answers[index].text = payload.text;
            break;
        }
        case "SET_ANSWER_ISCORRECT": {
            let { payload } = action;
            let { answers } = state;
            let index = answers.findIndex((answer => answer.id === payload.id));
            newState.answers[index].isCorrect = payload.isCorrect;
            console.log(newState.answers);
            break;
        }
        case "SET_CORRECT_ANSWER": {
            let { payload } = action;
            newState.answers.forEach((answer) => {
                if (answer.id === payload.id) {
                    answer.isCorrect = true;
                } else {
                    answer.isCorrect = false;
                }
            });
            console.log(newState.answers);
            break;
        }
        default: break;
    }
    return newState;
}

export default questionReducer;