import React, { useState } from 'react'
import { Container, Header, Label, Search, Table, TableBody } from 'semantic-ui-react'
import StudentReportDetails from '../components/StudentReportDetails'
import StudentTestsReportList from '../components/StudentTestsReportList'

const student = {
    _id: "asd1e21jn4j5",
    name: "Bart Simp",
    email: "asdas@gmail.com",
    lastActivity: "10/10/2020"
}


const StudentReportsPage = () => {


    return (
        <Container>
            <Header as="h1"> Report By Respondent Name</Header>
            <Header as="h2">Find a respondent</Header>
            <p>to find a respondent, start typing the name below. Then select a respondent from the list that will apear.</p>

            <Label horizontal>Name: </Label>
            <Search></Search>

            <StudentReportDetails item={student} />

            <Header as="h1">Activity Report for: {student.name}</Header>
            <p>Click a test to show its results</p>

            <StudentTestsReportList />
        </Container>
    )
}

export default StudentReportsPage
