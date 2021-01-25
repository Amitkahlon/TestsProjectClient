const testReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TITLE':
            return {...state, title: action.payload}
        case 'SET_DESCRIPTION':
            return {...state, description: action.payload}
        case 'SET_PASS_GRADE':
            return {...state, passGrade: action.payload}
        case 'SET_SHOW_CORRECT_ANSWERS':
            return {...state, showCorrectAnswers: action.payload}
        case 'SET_QUESTIONS':
            return {...state, questions: action.payload}
        default:
            return state;
    }
}

export default testReducer;