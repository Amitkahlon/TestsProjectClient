import React, { useReducer, useEffect, useState } from 'react';
import { Container, Header, Search } from 'semantic-ui-react';
import QuestionsList from "../components/QuestionsList";
import _ from 'lodash'
import searchQuestionReducer, { initialState } from "../reducers/searchQuestionReducer";
import serverAccess from "../api/serverAccess";

// const source = ["pie", "apple", "pie", "apple", "pie", "apple", "pie", "apple", "pie", "apple",];

const ManageQuestionsPage = () => {

    const [questions, setQuestions] = useState([]);
    const [state, dispatch] = useReducer(searchQuestionReducer, initialState);

    useEffect(() => {
        // Anything in here is fired on component mount.
        document.title = `Manage Questions`;
        getQuestions()

        return () => {
            // Anything in here is fired on component unmount.
            document.title = `Tests Manager`;
            clearTimeout(timeoutRef.current)
        }

    }, []);

    const getQuestions = () => {
        serverAccess.get('/api/questions')
            .then(({ data }) => {
                if (data) {
                    setQuestions(data.questions)
                    dispatch({type: "SET_RESULTS", results: data.questions })
                }
            })
            .catch(err => console.error(err))
    }

    const { loading, results, value } = state

    const timeoutRef = React.useRef()
    const handleSearchChange = React.useCallback((e, data) => {
        clearTimeout(timeoutRef.current)
        dispatch({ type: 'START_SEARCH', query: data.value })

        timeoutRef.current = setTimeout(() => {
            if (data.value.length === 0) {
                dispatch({ type: 'CLEAN_QUERY' })

                return
            }

            const re = new RegExp(_.escapeRegExp(data.value), 'i')
            const isMatch = (result) => re.test(result.title)

            dispatch({
                type: 'FINISH_SEARCH',
                results: _.filter(questions, isMatch),
            })
        }, 300)
    }, [])

    return (
        <div>
            <Header style={styles.header}>Manage Questions</Header>
            <Search 
                width="500px"
                size="large"
                loading={loading}
                onResultSelect={(e, data) =>
                    dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title })
                }
                onSearchChange={handleSearchChange}
                results={results}
                value={value}
            />
            <QuestionsList questions={state.results} setQuestions={setQuestions} />
        </div>
    )
}

const styles = {
    header: {
        textAlign: 'center',
        marginBottom: 40
    }
}

export default ManageQuestionsPage;