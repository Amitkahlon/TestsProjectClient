import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { ContextValues } from '../context/AppContext';

const Navbar = () => {
    const { token, admin } = useContext(ContextValues)
    const [activeItem, setActiveItem] = useState('')
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
                </Menu.Menu>
                :
                <></>
            }
        </Menu>
    );
}

export default Navbar;