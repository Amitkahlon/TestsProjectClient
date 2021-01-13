import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Grid, Header } from 'semantic-ui-react';
import '../styles/AdminPage.css';

const AdminPage = () => {
    return (
        <div className="adminpage">
            <Header textAlign="center">Admin Page:</Header>
            <div className="divider">
                <Divider />
            </div>
            <Container textAlign="center">
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <Link to="/tests">
                                <Button primary>Manage Tests</Button>
                            </Link>
                        </Grid.Column>
                        <Grid.Column>
                            <Link to="/questions">
                                <Button primary>Manage Questions</Button>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link to="/organizations">
                                <Button primary>Manage Organizations</Button>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
}

export default AdminPage;