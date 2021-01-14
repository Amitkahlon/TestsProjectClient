import React from 'react';
import { Grid, Menu } from 'semantic-ui-react'
import AddQuestionForm from "../components/AddQuestionForm";

const AddQuestionPage = () => {
    return (
        // <Grid>
        //     <Grid.Row>
        //         <Grid.Column>
        // <Menu fluid vertical>
        <div>
            <h1 style={styles.header}>Add Question</h1>
            <AddQuestionForm />
        </div>

                    /* </Menu>
                </Grid.Column>
            </Grid.Row>
        </Grid> */
    )
}

const styles = {
    header: {
        textAlign: 'center',
        marginBottom: 40
    },
}

export default AddQuestionPage;