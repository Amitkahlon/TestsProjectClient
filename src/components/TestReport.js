import React from 'react';
import { Container, Header, Label, Select, List, Checkbox, Button } from 'semantic-ui-react';
import GenerateTestReportForm from '../components/GenerateTestReportForm';
import ReportSummary from './ReportSummary';
import RespondentGradesList from './RespondentGradesList';

const TestReport = ({ reportForm }) => {

    const summary = {
        testName: "test1",
        fromDate: "1/1/2020",
        toDate: "1/1/2020",
        submissionsCount: 3,
        testId: "s1j3iuasdjhu245",
        respondentPassed: 2,
        testType: "???",
        PassingPrecentage: 33,
        questionsCount: 15,
        averageGrade: 60,
        passingGrade: 55,
        medianGrade: 63
    }

    return (
        <Container >
            <ReportSummary summary={summary} />
            <Header as="h1">Respondent Grades And Answers </Header>
            <Header as="h4">Click a name form the list to see the respondent test </Header>

            <RespondentGradesList style={{margin: "1000px"}}/>
        </Container>
    )
}

export default TestReport;