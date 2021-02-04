<<<<<<< Updated upstream:src/pages/TestReportsPage.js
import React from 'react';
import { Form, Container, Header, Label, Select, List, Checkbox, Button } from 'semantic-ui-react';
import GenerateTestReportForm from '../components/GenerateTestReportForm';
import TestReport from '../components/TestReport';
=======
import React, { useReducer, useEffect, useState } from 'react';
import { Container, Button, Icon } from 'semantic-ui-react';
import GenerateTestReportForm from '../../components/reports/GenerateTestReportForm';
import TestReport from '../../components/reports/TestReport';
import testReportFormReducer from "../../reducers/testReportFormReducer";
import serverAccess from "../../api/serverAccess";
>>>>>>> Stashed changes:src/pages/reports/TestReportsPage.js

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