import React, { useEffect, useState } from 'react'
import { Container, Header } from "semantic-ui-react";
import ExamReport from '../../components/reports/ExamReport'
import ExamSummary from '../../components/reports/ExamSummary';
import serverAccess from '../../api/serverAccess';

const summary = {
    testName: "",
    testId: '',
    submissionsCount: 0,
    correctAnswerCount: 0,
    grade: 0,
    questionsCount: 0,
    status: false,
    passingGrade: 0,
}

const initialReport = {
    summary,
    questionsDetails: [],
    exam: {
        studentFirstName: "",
        studentLastName: "",
    }
}

const ExamReportPage = (props) => {
    const [report, setReport] = useState(initialReport);
    const { id } = props.match.params

    useEffect(() => {
        serverAccess.get('api/reports/exam', {
            params: {
                examId: id
            }
        }).then(res => {
            setReport(res.data.report);
        })
    }, [id]);

    return (
        <Container>
            <Header as="h1">Test results for: {report.summary.testName}</Header>
            <Header style={{ marginTop: 0 }} as="h2">Respondent: {`${report.exam.studentFirstName} ${report.exam.studentLastName}`}</Header>
            <ExamSummary summary={report.summary} />

            <ExamReport questionsDetails={report.questionsDetails} style={{ marginTop: 40 }} />
        </Container>
    )
}

export default ExamReportPage;
