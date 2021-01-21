export const initialState = {
    loading: false,
    results: [],
    value: ''
}

const searchQuestionReducer = (state, action) => {
    switch (action.type) {
        case 'CLEAN_QUERY':
            return initialState
        case 'START_SEARCH':
            return { ...state, loading: true, value: action.query }
        case 'FINISH_SEARCH':
            return { ...state, loading: false, results: action.results }
        case 'UPDATE_SELECTION':
            return { ...state, value: action.selection }
        case "SET_RESULTS":
            console.log(state);
            console.log(action);
            return { ...state, results: action.results }
        default:
            throw new Error()
    }
}

export default searchQuestionReducer