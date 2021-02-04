import React from "react";
import { Link } from "react-router-dom";
import { Button, List, Form, Label, Checkbox } from 'semantic-ui-react'

const GenerateTestReportForm = ({ form, formDispatch, submitForm, setShowReport }) => {
    return <Form className="centered segment" style={{ width: "80%" }}>
        <List divided>
            <List.Item>
                <Label horizontal>Select Test: </Label>
                <Form.Select options={form.tests} value={form.testId} onChange={(e, { value }) => {
                    setShowReport();
                    formDispatch({ type: "SET_TESTID", payload: { testId: value } })
                }} placeholder="Test1" />
            </List.Item>
            <List.Item>
                <Label horizontal>From: </Label>
                <input type="date" name="date" value={form.fromDate} onChange={(event) => formDispatch({ type: "Set_From_Date", payload: { fromDate: event.target.value } })}></input>

                <Label horizontal>To: </Label>
                <input type="date" name="date" value={form.toDate} onChange={(event) => formDispatch({ type: "Set_To_Date", payload: { toDate: event.target.value } })}></input>
            </List.Item>
            <List.Item>
                <Form.Checkbox label="Any Date In The Past" checked={form.anyDate} onChange={(e, { checked }) => formDispatch({ type: "Set_Any_Date", payload: { checked } })} />
            </List.Item>

            <List.Item>
                <Link to="/reports">
                    <Button floated="left">Back</Button>
                </Link>
                <Button floated="right" onClick={submitForm}>Generate Report</Button>
            </List.Item>
        </List>
    </Form>
}

export default GenerateTestReportForm;