import React from 'react';
import { Table, Icon } from 'semantic-ui-react';

const TestsList = ({ tests }) => {
    let tableContent = !tests.message ? <>
        {tests.map(test => (
            <Table.Row>
                <Table.Cell collapsing>
                    <Icon name='lab' />
                    {test.title}
                </Table.Cell>
                <Table.Cell>{test.authorEmail}</Table.Cell>
                <Table.Cell>{test.passGrade}</Table.Cell>
                <Table.Cell>{test.showCorrectAnswers? 'Yes' : 'No'}</Table.Cell>
                <Table.Cell collapsing textAlign='right'>
                    {test.questions.length}
                </Table.Cell>
            </Table.Row>
        ))}

        <Table.Row>
            <Table.Cell>
                <Icon name='folder' /> test
        </Table.Cell>
            <Table.Cell>Initial commit</Table.Cell>
            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>
                <Icon name='folder' /> build
        </Table.Cell>
            <Table.Cell>Initial commit</Table.Cell>
            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>
                <Icon name='file outline' /> package.json
        </Table.Cell>
            <Table.Cell>Initial commit</Table.Cell>
            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>
                <Icon name='file outline' /> Gruntfile.js
        </Table.Cell>
            <Table.Cell>Initial commit</Table.Cell>
            <Table.Cell textAlign='right'>10 hours ago</Table.Cell>
        </Table.Row>
    </>
        :
        <Table.Row>
            <Table.Cell textAlign='center'>
                <Icon name='minus circle' />
                {tests.message}
            </Table.Cell>
        </Table.Row>

    return (
        <Table celled striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>Tests list</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {tableContent}
            </Table.Body>
        </Table>
    );
}

export default TestsList;