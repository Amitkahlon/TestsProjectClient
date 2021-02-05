import React, { useContext } from 'react';
import { Container, Loader } from 'semantic-ui-react';
import AdminMenu from '../../components/admin/AdminMenu';
import ChooseOrganization from '../../components/organizations/ChooseOrganization';
import { ContextValues } from '../../context/AppContext';
import '../../styles/AdminPage.css';

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