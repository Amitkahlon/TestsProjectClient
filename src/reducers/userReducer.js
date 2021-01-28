const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ID':
            return { ...state, studentId: action.payload }
        case 'SET_EMAIL':
            return { ...state, studentEmail: action.payload }
        case 'SET_FIRST_NAME':
            return { ...state, studentFirstName: action.payload }
        case 'SET_LAST_NAME':
            return { ...state, studentLastName: action.payload }
        case 'SET_CLASS':
            return { ...state, class: action.payload }
        case 'SET_TEST_ID':
            return { ...state, testId: action.payload }
        case 'SET_TEST_QUESTIONS':
            return { ...state, questions: action.payload }
        default:
            return state;
    }
}

export default userReducer;