import React from 'react';
import { Form, Container, Header, Label, Select, List, Checkbox, Button } from 'semantic-ui-react';
import GenerateTestReportForm from '../components/GenerateTestReportForm';
import TestReport from '../components/TestReport';

const options = [
    { key: 'm', text: 'Test1', value: 'test1' },
    { key: 'f', text: 'Test2', value: 'test2' },
]

const TestReportsPage = () => {
    return (
        <Container >
           <GenerateTestReportForm options={options}/>
           <TestReport />
        </Container>
    )
}

export default TestReportsPage;