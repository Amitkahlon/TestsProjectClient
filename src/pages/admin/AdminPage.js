import React, { useContext } from 'react';
import { Container, Loader } from 'semantic-ui-react';
import '../../styles/AdminPage.css';
import ChooseOrganization from '../../components/organizations/ChooseOrganization';
import AdminMenu from '../../components/admin/AdminMenu';
import { ContextValues } from '../../context/AppContext';

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