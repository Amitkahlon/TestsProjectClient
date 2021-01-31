import React from "react";
import { Button, List, Form, Label, Checkbox } from 'semantic-ui-react'

const GenerateTestReportForm = ({ form, formDispatch, submitForm }) => {
    return <Form className="centered segment" style={{ width: "80%" }}>
        <List divided>
            <List.Item>
                <Label horizontal>Select Test: </Label>
                <Form.Select options={form.tests} placeholder="Test1" />
            </List.Item>
            <List.Item>
                <Label horizontal>From: </Label>
                <input type="date" name="date" value={form.fromDate} onChange={(event) => formDispatch({type: "Set_From_Date", payload: {fromDate: event.target.value}}) }></input>

                <Label horizontal>To: </Label>
                <input type="date" name="date" value={form.toDate} onChange={(event) => formDispatch({type: "Set_To_Date", payload: {toDate: event.target.value}}) }></input>
            </List.Item>
            <List.Item>
                <Checkbox inline value={form.anyDate} onChange={(e, { checked }) => formDispatch({type: "Set_Any_Date", payload: {checked }})} />
                <Label horizontal>Any Date In The Past</Label>
            </List.Item>

            <List.Item>
                <Button floated="left">Back</Button>
                <Button floated="right" onClick={submitForm}>Generate Report</Button>
            </List.Item>
        </List>
    </Form>
}

export default GenerateTestReportForm;