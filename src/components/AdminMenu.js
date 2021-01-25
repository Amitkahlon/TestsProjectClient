import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Dropdown, Header } from 'semantic-ui-react';
import serverAccess from '../api/serverAccess';
import { ContextValues } from '../context/AppContext';

const AdminMenu = () => {
    const { admin, setAdmin } = useContext(ContextValues)
    const [selectedField, setSelectedField] = useState(null)
    const getFields = () => {
        let fields = admin.organization.fields.map(field => ({ text: field.title, value: field._id }))
        return fields
    }
    return (
        <div className="adminpage">
            <Header textAlign="center">Admin Menu:</Header>
            <div className="divider">
                <Divider />
            </div>
            <div className="admin-menu">
                <Dropdown
                    value={selectedField}
                    options={getFields()}
                    placeholder='Select field'
                    selection
                    onChange={(e, { value }) => {
                        setSelectedField(value)
                        setAdmin(prev => ({
                            ...prev,
                            field: admin.organization.fields.find(f => f._id === value)
                        }))
                        serverAccess.defaults.headers.common['x-field'] = value;
                    }}
                />
                {selectedField ? <>
                    <Link to="/tests">
                        <Button primary>Manage Tests</Button>
                    </Link>
                    <Link to="/questions">
                        <Button primary>Manage Questions</Button>
                    </Link>
                    <Link to="/organizations">
                        <Button primary>Manage Organizations</Button>
                    </Link>
                </> : <></>}
            </div>
        </div >
    );
}

export default AdminMenu;