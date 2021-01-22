export const initialState = {
    loading: false,
    results: [],
    value: ''
}

const searchQuestionReducer = (state, action) => {
    switch (action.type) {
        case 'CLEAN_QUERY':
            return { ...state, loading: false, results: action.results }
        case 'START_SEARCH':
            console.log(state.results)
            return { ...state, loading: true, value: action.query }
        case 'FINISH_SEARCH':
            return { ...state, loading: false, results: action.results }
        case 'UPDATE_SELECTION':
            return { ...state, value: action.selection, results: action.results }
        case "SET_RESULTS":
            return { ...state, results: action.results }
        default:
            return state
    }
}

export default searchQuestionReducer