import React from 'react';
import { Container, Header, List, Button, Search } from 'semantic-ui-react';
import QuestionStatistics from './QuestionStatistics';
import ReportSummary from './ReportSummary';
import RespondentGradesList from './RespondentGradesList';

const TestReport = ({ reportData }) => {
    return (
        <Container >
            <ReportSummary summary={reportData.summary} />

            <Header as="h1">Respondent Grades And Answers </Header>
            <Header as="h4">Click a name form the list to see the respondent test </Header>

            <RespondentGradesList respondents={reportData.exams} />

            <Header as="h1">Question Statistics</Header>
            <Header as="h4">Click a question to show statistics regarding its answer, then click the answers to see which answer each respondent selected. <br /> You can use the following buttons to do the same with all questions in the list. </Header>
            <p>Filter by tags or content: </p>
            <Search></Search>
            <List horizontal>
                <List.Item>
                    <Button>Show answer statistics of all questions</Button>
                    <Button>Show detailed report of all answers</Button>
                </List.Item>
            </List>

            <QuestionStatistics questions={reportData.questionStatistics} />
        </Container>
    )
}

export default TestReport;