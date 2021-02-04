import React from "react";
<<<<<<< Updated upstream:src/components/GenerateTestReportForm.js
import { Button, List, Form, Label, Checkbox } from 'semantic-ui-react'
=======
import { Link } from "react-router-dom";
import { Button, List, Form, Label } from 'semantic-ui-react'
>>>>>>> Stashed changes:src/components/reports/GenerateTestReportForm.js

const GenerateTestReportForm = ({ options }) => {
    return <Form className="centered segment" style={{ width: "80%" }}>
        <List divided>
            <List.Item>
                <Label horizontal>Select Test: </Label>
                <Form.Select options={options} placeholder="Test1" />
            </List.Item>
            <List.Item>
                <Label horizontal>From: </Label>
                <input type="date" name="date"></input>

                <Label horizontal>To: </Label>
                <input type="date" name="date"></input>
            </List.Item>
            <List.Item>
                <Checkbox inline />
                <Label horizontal>Any Date In The Past</Label>
            </List.Item>

            <List.Item>
                <Button floated="left">Back</Button>
                <Button floated="right">Generate Report</Button>
            </List.Item>
        </List>
    </Form>
}

export default GenerateTestReportForm;