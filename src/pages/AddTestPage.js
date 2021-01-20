import React, { useState } from 'react';
import { Button, Container, Form, Grid, Header, Segment, TextArea, Input } from 'semantic-ui-react';
import NumberInput from '../components/controls/NumberInput';

const AddTestPage = () => {
    const [gradeValue, setGradeValue] = useState(0)
    const style = {
        display: 'flex',
        width: '20%'
    }
    const increaseGradeValue = () => {
        if(gradeValue >= 100) return setGradeValue(100)
        setGradeValue(gradeValue + 1)
    }

    const decreaseGradeValue = () => {
        if(gradeValue <= 0) return setGradeValue(0)
        setGradeValue(gradeValue - 1)
    }
    return (
        <Container textAlign='center'>
            <Header as='h1'>Add new test</Header>
            <Grid columns={3}>
                <Grid.Column width={3} />
                <Grid.Column width={10}>
                    <Container textAlign='left'>
                        <Segment >
                            <Form>
                                <Form.Field>
                                    <Form.Input label='Test title:' type='text' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input label='Test description:' type='text' control={TextArea} />
                                </Form.Field>
                                <Form.Field>
                                    <label>Test pass grade:</label>
                                    <div style={style}>
                                        <Button icon='angle down' onClick={decreaseGradeValue} />
                                        <Input value={gradeValue} />
                                        <Button icon='angle up' style={{ marginLeft: '3px' }} onClick={increaseGradeValue} />
                                    </div>
                                </Form.Field>
                            </Form>
                        </Segment>
                    </Container>
                </Grid.Column>
                <Grid.Column width={3} />
            </Grid>
        </Container>
    );
}

export default AddTestPage;