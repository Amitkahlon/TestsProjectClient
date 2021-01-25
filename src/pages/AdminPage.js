import React, { useContext } from 'react';
import { Container, Loader } from 'semantic-ui-react';
import AdminMenu from '../components/AdminMenu';
import ChooseOrganization from '../components/ChooseOrganization';
import { ContextValues } from '../context/AppContext';
import '../styles/AdminPage.css';

const AdminPage = () => {
    const { admin } = useContext(ContextValues)
   
    if (!admin) {
        return (
            <Container>
                <Loader />
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