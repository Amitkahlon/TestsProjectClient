import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header } from 'semantic-ui-react';

const ReportsPage = () => {
    return (
        <Container className="segment centered">
            <Header className="centered">Reports</Header>

            <Link to="/reports/test">
                <Button>Tests Reports</Button>
            </Link>

            <Link to="/reports/student">
                <Button>Student Report</Button>
            </Link>
        </Container>
    )
}

export default ReportsPage;