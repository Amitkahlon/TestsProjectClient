import React from 'react'
import { Table, TableBody } from 'semantic-ui-react'
import StudentReportItem from './StudentReportItem';
import '../../styles/MouseHover.css';

const StudentTestsReportList = ({ exams }) => {
    return (
        <Table celled striped selectable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Exam ID</Table.HeaderCell>
                    <Table.HeaderCell>Test ID</Table.HeaderCell>
                    <Table.HeaderCell>Test Name</Table.HeaderCell>
                    <Table.HeaderCell>Grade</Table.HeaderCell>
                    <Table.HeaderCell>Last Activity</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <TableBody>
                {
                    exams.map((exam) =>
                        <StudentReportItem className="pointer" item={exam} key={exam._id} />
                    )
                }
            </TableBody>
        </Table>
    )
}

export default StudentTestsReportList
