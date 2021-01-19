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
            let id = action.payload;
            newState.answers = newState.answers.filter((answer) => answer.id !== id)
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
            console.log(newState.answers[index]);
            break;
        }
        default: break;
    }
    return newState;
}

export default questionReducer;