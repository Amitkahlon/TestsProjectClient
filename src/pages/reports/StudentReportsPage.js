import React, { useState, useRef, useEffect, useReducer } from 'react'
import { Container, Header, Label, Search } from 'semantic-ui-react'
import StudentReportDetails from '../../components/reports/StudentReportDetails'
import StudentTestsReportList from '../../components/reports/StudentTestsReportList'
import _ from 'lodash';
import studentReportReducer, { initialState } from "../../reducers/studentReportReducer";
import serverAccess from "../../api/serverAccess";


const initialStudent = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    lastActivity: ""
}



const StudentReportsPage = () => {
    const [students, setStudents] = useState([]);
    const [searchbarState, dispatch] = useReducer(studentReportReducer, initialState);
    const { loading, results, value } = searchbarState;
    const [student, setStudent] = useState(initialStudent);
    const [studentExams, setStudentExams] = useState([]);


    useEffect(() => {
        // Anything in here is fired on component mount.
        serverAccess.get("api/exams/students").then(({ data }) => {
            console.log(data.students.map(s => s._id));
            setStudents(data.students.map(s => s._id))
        })

        return () => {
            // Anything in here is fired on component unmount.
            clearTimeout(timeoutRef.current)
        }

    }, []);

    const timeoutRef = useRef()
    const handleSearchChange = (e, data) => {
        console.log("search occured", data.value)
        clearTimeout(timeoutRef.current)
        dispatch({ type: 'START_SEARCH', query: data.value })

        timeoutRef.current = setTimeout(() => {
            if (data.value.length === 0) {
                dispatch({
                    type: 'CLEAN_QUERY',
                    results: students.map(s => `${s.studentFirstName} ${s.studentLastName}`)
                })
                return
            }

            const filteredStudents = filterItems(data.value)

            dispatch({
                type: 'FINISH_SEARCH',
                results: filteredStudents,
            })

        }, 300)
    }

    const filterItems = (searchValue) => {
        const re = new RegExp(_.escapeRegExp(searchValue), 'i')
        const isMatch = (result) => re.test(`${result.studentFirstName} ${result.studentLastName}`)

        const filteredStudents = _.filter(students, isMatch);

        return filteredStudents;
    };

    const handleStudentSelect = (studentName, studentId) => {
        const foundStudent = students.find(s => {
            return `${s.studentFirstName} ${s.studentLastName}` === studentName && s.studentId === studentId
        })

        serverAccess.get('api/exams/student', {
            params: {
                studentFirstName: foundStudent.studentFirstName,
                studentLastName: foundStudent.studentLastName,
                studentId: foundStudent.studentId
            }
        }).then(({ data }) => {
            const { exams } = data;
            exams.sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt);
            })
            console.log(exams)
            const e = exams[0]
            setStudent({
                id: e.studentId,
                firstName: e.studentFirstName,
                lastName: e.studentLastName,
                email: e.studentEmail,
                lastActivity: e.createdAt
            });
            setStudentExams(exams);

        }).catch(err => console.log(err))
    }



    return (
        <Container>
            <Header as="h1"> Report By Respondent Name</Header>
            <Header as="h2">Find a respondent</Header>
            <p>to find a respondent, start typing the name below. Then select a respondent from the list that will apear.</p>

            <Label horizontal>Name: </Label>
            <Search
                loading={loading}
                onResultSelect={(e, data) => {
                    handleStudentSelect(data.result.title, data.result.description)
                    dispatch({ type: 'UPDATE_SELECTION', selection: data.result.title, results: filterItems(data.result.title) })
                }}
                onSearchChange={handleSearchChange}
                results={results.map((res, i) => {
                    return { title: `${res.studentFirstName} ${res.studentLastName}`, description: res.studentId, key: i }
                })}
                value={value}
            />
            <StudentReportDetails item={student} />

            <Header as="h1">Activity Report for: {`${student.firstName} ${student.lastName}`}</Header>
            <p>Click a test to show its results</p>

            <StudentTestsReportList exams={studentExams} />
        </Container>
    )
}

export default StudentReportsPage
