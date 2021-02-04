import React from 'react'
import { Table, TableBody } from 'semantic-ui-react'
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
<<<<<<< Updated upstream:src/components/StudentTestsReportList.js
                    tests.map(test =>
                        <StudentReportItem item={test} key={test._id} />
=======
                    exams.map((exam) =>
                        <StudentReportItem item={exam} key={exam._id} />
>>>>>>> Stashed changes:src/components/reports/StudentTestsReportList.js
                    )
                }
            </TableBody>
        </Table>
    )
}

export default StudentTestsReportList
