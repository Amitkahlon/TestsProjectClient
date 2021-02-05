import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react';
import serverAccess from '../../api/serverAccess';
import { ContextValues } from '../../context/AppContext';

const Navbar = () => {
    const { token, admin, setAdmin, setToken } = useContext(ContextValues)
    const [activeItem, setActiveItem] = useState('')
    const history = useHistory()

    const handleLogout = () => {
        setAdmin(null)
        setToken(null)
        localStorage.removeItem('token');
        serverAccess.defaults.headers.common['x-auth-token'] = '';
        history.push('/')
    }

    return (
        <Menu stackable pointing secondary>
            <Link to='/'>
                <Menu.Item as="a" name='logo' active={activeItem === 'logo'}
                    onClick={(e, { name }) => setActiveItem(name)}>
                    <div className="line logo">
                        <i className="fas fa-flask"></i>
                        <div>Testim</div>
                    </div>
                </Menu.Item>
            </Link>
            <Link to='/'>
                <Menu.Item name='home' active={activeItem === 'home'}
                    onClick={(e, { name }) => setActiveItem(name)}>
                    Home
                </Menu.Item>
            </Link>
            <Link to={token !== null ? '/admin' : '/login'}>
                <Menu.Item name={token !== null ? 'admin' : 'login'} active={activeItem === (token !== null ? 'admin' : 'login')}
                    onClick={(e, { name }) => setActiveItem(name)}>
                    {token !== null ? 'Admin' : 'Login'}
                </Menu.Item>
            </Link>
            {admin ?
                <Menu.Menu position="right">
                    <Menu.Item>
                        {admin.user.email}
                    </Menu.Item>
                    {admin.organization ? <Menu.Item>
                        {admin.organization.name}
                    </Menu.Item> : <></>}
                    <Button size='tiny' basic color='red' circular style={{margin: '4px 3px 4px 0px'}} onClick={handleLogout}>Logout</Button>
                </Menu.Menu>
                :
                <></>
            }
        </Menu>
    );
}

export default Navbar;