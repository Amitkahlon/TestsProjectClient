import React, { useReducer, useEffect } from 'react';
import { Form, Container, Header, Label, Select, List, Checkbox, Button } from 'semantic-ui-react';
import GenerateTestReportForm from '../components/GenerateTestReportForm';
import TestReport from '../components/TestReport';
import testReportFormReducer from "../reducers/testReportFormReducer";
import serverAccess from "../api/serverAccess";

const initialForm = {
    tests: [],
    toDate: "2020-01-29",
    fromDate: "2020-01-29",
    anyDate: false,
    testId: "1111111"
}

const TestReportsPage = () => {

    const [formState, formDispatch] = useReducer(testReportFormReducer, initialForm);

    const submitForm = () => {

        console.log(formState)

        if (formState.anyDate) {
            if (formState.testId) {

            } else {
                console.error("testid cannot be undifined");
            }

        } else {
            if (formState.toDate && formState.fromDate && formState.testId) {
                serverAccess.get('/api/reports', {
                    params: {
                        testId: "123456789",
                        toDate: "2020-01-29",
                        fromDate: "2020-01-29"
                    }
                }).then(res => console.log(res)).catch(err => console.log(err))
            }
            else {
                console.error("form dates and testid cannot be undifined");
            }
        }
    }

    useEffect(() => {
        serverAccess.get('/api/tests/namesAndIds')
        .then(({ data }) => {
            if(data.tests){
                const testOptions = data.tests.map(test => {
                    return {_id: test._id,text: test.title , key: test._id }
                })
                formDispatch({ type: "SET_TESTS", payload: { tests: testOptions } })
            }else {
                console.log(data.message);
            }
        })
        .catch(err => console.log(err))
      }, []);

    return (
        <Container >
            <GenerateTestReportForm form={formState} formDispatch={formDispatch} submitForm={submitForm} />
            <TestReport />
        </Container>
    )
}

export default TestReportsPage;