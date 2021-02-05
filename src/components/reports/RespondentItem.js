import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react'
import RespondentItemExtra from './RespondentItemExtra'

const RespondentItem = ({ item }) => {
    const [showExtra, setShowExtra] = useState(false);
    const displayExtra = () => showExtra ? '' : 'none'

    const getAnsweredQuestionsCount = () => {
        let count = 0;
        item.questions.forEach(question => {
            if (question.answer.length > 0) count++;
        });

        return count
    }
    
    return (
        <>
            <Table.Row onClick={() => setShowExtra(!showExtra)}>
                <Table.Cell>{item._id}</Table.Cell>
                <Table.Cell>{`${item.studentFirstName}  ${item.studentLastName}`}</Table.Cell>
                <Table.Cell>{item.createdAt}</Table.Cell>
                <Table.Cell>{getAnsweredQuestionsCount()}</Table.Cell>
                <Table.Cell>{item.grade}</Table.Cell>
            </Table.Row>
            <Table.Row style={{ display: displayExtra() }}>
                <Table.HeaderCell colSpan='5' style={{ backgroundColor: '' }}>
                    <RespondentItemExtra data={item} />
                    <Link to={`/reports/exam/${item._id}`}>
                        <Button>Go To Exam Report</Button>
                    </Link>
                </Table.HeaderCell>
            </Table.Row>
        </>
    )
}

export default RespondentItem
