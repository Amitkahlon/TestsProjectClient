import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header } from 'semantic-ui-react';
import '../../styles/ReportPage.css'

const ReportsPage = () => {
    return (
        <Container className="segment">
            <Header className="center">Reports</Header>

            <div className="center">
                <Link to="/reports/test">
                    <Button className="center">Tests Reports</Button>
                </Link>

                <Link to="/reports/student" className="marginTop20">
                    <Button>Student Report</Button>
                </Link>
            </div>
        </Container>
    )
}

export default ReportsPage;