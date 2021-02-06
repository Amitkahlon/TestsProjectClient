import React, { useReducer, useEffect, useState } from 'react';
import { Container, Button, Icon } from 'semantic-ui-react';
import GenerateTestReportForm from '../../components/reports/GenerateTestReportForm';
import TestReport from '../../components/reports/TestReport';
import testReportFormReducer from "../../reducers/testReportFormReducer";
import serverAccess from "../../api/serverAccess";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;


const initialForm = {
    tests: [],
    toDate: today,
    fromDate: today,
    anyDate: false,
    testId: ""
}

const initialData = {
    summary: {
        testName: "",
        fromDate: "",
        toDate: "",
        submissionsCount: 0,
        testId: "",
        respondentPassed: 0,
        PassingPrecentage: 0,
        questionsCount: 0,
        averageGrade: 0,
        passingGrade: 0,
        medianGrade: 0
    },
    exams: [],
    questionStatistics: []
}

const TestReportsPage = () => {

    const [formState, formDispatch] = useReducer(testReportFormReducer, initialForm);
    const [showReport, setShowReport] = useState(false);
    const [reportData, setReportData] = useState(initialData);

    const submitForm = () => {
        if (formState.anyDate) {
            if (formState.testId) {
                serverAccess.get('/api/reports/any', {
                    params: {
                        testId: formState.testId
                    }
                })
                    .then(res => {
                        if (res.data.report) {
                            console.log(res.data.report);
                            setReportData(res.data.report);
                            setShowReport(true);
                        } else {
                            console.log(res.data.message);
                        }
                    })
                    .catch(err => console.log(err))

            } else {
                console.error("testid cannot be undifined");
            }

        } else {
            if (formState.toDate && formState.fromDate && formState.testId) {
                serverAccess.get('/api/reports', {
                    params: {
                        testId: formState.testId,
                        toDate: formState.toDate,
                        fromDate: formState.fromDate
                    }
                })
                    .then(res => {
                        if (res.data.report) {
                            console.log(res.data.report)
                            setReportData(res.data.report);
                            setShowReport(true);
                        } else {
                            console.log(res.data.message)
                        }
                    })
                    .catch(err => console.log(err))
            }
            else {
                console.error("form dates and testid cannot be undifined");
            }
        }
    }

    useEffect(() => {
        serverAccess.get('/api/tests/namesAndIds')
            .then(({ data }) => {
                if (data.tests) {
                    const testOptions = data.tests.map(test => {
                        return { value: test._id, text: test.title, key: test._id }
                    })
                    formDispatch({ type: "SET_TESTS", payload: { tests: testOptions } });
                } else {
                    console.log(data.message);
                }
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <Container >
            <GenerateTestReportForm form={formState} formDispatch={formDispatch} submitForm={submitForm} setShowReport={() => setShowReport(false)} />
            <Button onClick={() => setShowReport(!showReport)}>
                <Icon name={(showReport ? 'plus' : 'minus')} />
                Show Report
            </Button>
            {
                showReport ? <TestReport reportData={reportData} /> : <></>
            }
        </Container>
    )
}

export default TestReportsPage;