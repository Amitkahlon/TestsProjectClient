import React, { useContext } from 'react';
import { Container, Loader } from 'semantic-ui-react';
import AdminMenu from '../components/AdminMenu';
import ChooseOrganization from '../components/ChooseOrganization';
import { ContextValues } from '../context/AppContext';
import '../styles/AdminPage.css';

const AdminPage = () => {
<<<<<<< Updated upstream
    const { admin } = useContext(ContextValues)
   
    if (!admin) {
        return (
            <Container>
                <Loader />
=======
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
                        <Grid.Column>
                            <Link to="/reports">
                                <Button primary>Reports</Button>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
>>>>>>> Stashed changes
            </Container>
        )
    }
    if (!admin.organization) {
        return (
            <ChooseOrganization/>
        )
    }
    return (
        <AdminMenu/>
    );
}

export default AdminPage;