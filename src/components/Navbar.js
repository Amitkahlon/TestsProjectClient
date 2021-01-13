import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {
    return (
        <Menu stackable>
            <Link to='/'>
                <Menu.Item as="a">
                    <div className="line">
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
            <Link to='/admin'>
                <Menu.Item>
                    Login
                </Menu.Item>
            </Link>
        </Menu>
    );
}

export default Navbar;