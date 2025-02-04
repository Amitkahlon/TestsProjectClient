const testReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return { ...state, title: action.payload }
        case 'SET_DESCRIPTION':
            return { ...state, description: action.payload }
        case 'SET_PASS_GRADE':
            return { ...state, passGrade: action.payload }
        case 'SET_SHOW_CORRECT_ANSWERS':
            return { ...state, showCorrectAnswers: action.payload }
        case 'SET_QUESTIONS':
            return { ...state, questions: action.payload }
        case 'SET_PASS_MESSAGE':
            return { ...state, passMessage: action.payload }
        case 'SET_FAIL_MESSAGE':
            return { ...state, failMessage: action.payload }
        case 'SET_LANGUAGE':
            return { ...state, language: action.payload }
        default:
            return state;
    }
}

export default testReducer;