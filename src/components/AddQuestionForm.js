import React from "react";
import {
    Button,
    Checkbox,
    Divider,
    Dropdown,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
    Icon
} from 'semantic-ui-react'

const questionType = [
    { key: 1, text: 'Single Answer', value: 1 },
    { key: 2, text: 'Multi Answer', value: 2 },
  ]

const AddQuestionForm = () => {
    return (
            <Form>
                <Form.Field
                    control={TextArea}
                    label='Question Text'
                    placeholder='Enter question text...'
                />
                <Form.Field
                    control={TextArea}
                    label='Question Sub Text'
                    placeholder='Enter question sub text...'
                />
                <Form.Dropdown width="10" 
                    control={Dropdown}
                    options={questionType}
                    selection
                    placeholder="Question Type"
                />

                <Divider />

                <Button floated="right" primary>
                    <Icon name='plus' />
                    Add an answer
                </Button>
            </Form>
    )
}

export default AddQuestionForm;