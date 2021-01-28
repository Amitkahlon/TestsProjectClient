import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Select } from 'semantic-ui-react';

const options = [
    { key: 'm', text: 'Users', value: 'users' },
    { key: 'f', text: 'Tests', value: 'math' },
  ]

const handleSelect = () => {

}

const ReportsPage = () => {
    return (
        <Container className="segment centered">
            <Header className="centered">Reports</Header>
            <Select style={{width: "80%"}} options={options} placeholder='Study Field' onClose={handleSelect}/>

            <Link to="/reports/test">Test Report</Link>
            <Link to="/reports/student">Student Report</Link>
        </Container>
    )
}

export default ReportsPage;