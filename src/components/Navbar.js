import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { ContextValues } from '../context/AppContext';

const Navbar = () => {
    const {token} = useContext(ContextValues)
    return (
        <Menu stackable>
            <Link to='/'>
                <Menu.Item as="a">
                    <div className="line logo">
                        <i className="fas fa-flask"></i>
                        <div>Testim</div>
                    </div>
                </Menu.Item>
            </Link>
            <Link to='/'>
                <Menu.Item>
                    Home
                </Menu.Item>
            </Link>
<<<<<<< Updated upstream
            <Link to='/login'>
=======
            <Link to={token !== null? '/admin' : '/login'}>
>>>>>>> Stashed changes
                <Menu.Item>
                    {token !== null? 'Admin' : 'Login'}
                </Menu.Item>
            </Link>
        </Menu>
    );
}

export default Navbar;