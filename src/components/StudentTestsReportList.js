import React, { useState } from 'react'
import { Container, Header, Search, Table, TableBody } from 'semantic-ui-react'
import StudentReportItem from './StudentReportItem'


const initialTestsList = [
    { instance: 24, _id: "asd1wenj21", name: "Java for beginners", grade: 75, lastActivity: "10/12/2020"},
    { instance: 24, _id: "asd1wenj21", name: "Java for beginners", grade: 75, lastActivity: "10/12/2020"},
    { instance: 24, _id: "asd1wenj21", name: "Java for beginners", grade: 75, lastActivity: "10/12/2020"},
    { instance: 24, _id: "asd1wenj21", name: "Java for beginners", grade: 75, lastActivity: "10/12/2020"},

]

const StudentTestsReportList = () => {
    const [tests, setTests] = useState(initialTestsList)


    return (
        <Table celled striped selectable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Instance</Table.HeaderCell>
                    <Table.HeaderCell>Test ID</Table.HeaderCell>
                    <Table.HeaderCell>Test Name</Table.HeaderCell>
                    <Table.HeaderCell>Grade</Table.HeaderCell>
                    <Table.HeaderCell>Last Activity</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <TableBody>
                {
                    tests.map(test =>
                        <StudentReportItem item={test} key={test._id} />
                    )
                }
            </TableBody>
        </Table>
    )
}

export default StudentTestsReportList
