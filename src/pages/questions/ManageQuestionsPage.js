import React, { useReducer, useEffect, useState, useRef } from 'react';
import { Header, Search } from 'semantic-ui-react';
import QuestionsList from "../../components/questions/QuestionsList";
import _ from 'lodash';
import searchQuestionReducer, { initialState } from "../../reducers/searchQuestionReducer";
import serverAccess from "../../api/serverAccess";




const ManageQuestionsPage = () => {
    const [questions, setQuestions] = useState([]);
    const [searchbarState, dispatch] = useReducer(searchQuestionReducer, initialState);
    const { loading, results, value } = searchbarState;


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
                console.log(data);
                if (data.questions) {
                    setQuestions(data.questions)
                    dispatch({ type: "SET_RESULTS", results: data.questions })
                }else {
                    console.error(data.message)
                }
            })
            .catch(err => console.error(err))
    }

    const filterItems = (searchValue) => {
        const re = new RegExp(_.escapeRegExp(searchValue), 'i')
        const isMatch = (result) => re.test(result.title)

        const filtedQuestions = _.filter(questions, isMatch);

        return filtedQuestions;
    }


    const timeoutRef = useRef()
    const handleSearchChange = (e, data) => {
        console.log("search occured")
        clearTimeout(timeoutRef.current)
        dispatch({ type: 'START_SEARCH', query: data.value })

        timeoutRef.current = setTimeout(() => {
            if (data.value.length === 0) {
                dispatch({ type: 'CLEAN_QUERY', results: questions })
                return
            }

            const filtedQuestions = filterItems(data.value)

            dispatch({
                type: 'FINISH_SEARCH',
                results: filtedQuestions,
            })

        }, 300)}

    return (
        <div>
            <Header style={styles.header}>Manage Questions</Header>
            <Search
                loading={loading}
                onResultSelect={(e, data) => {
                    console.log(data.result.title)
                    dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title, results: filterItems(data.result.title) })
                }}
                onSearchChange={handleSearchChange}
                results={results.map((res, i) => {
                    return { title: res.title, key: i}
                })}
                value={value}
            />
            <QuestionsList questions={searchbarState.results} setQuestions={(questions) => {
                setQuestions(questions);
                dispatch({ type: "SET_RESULTS", results: questions })
            }} />
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