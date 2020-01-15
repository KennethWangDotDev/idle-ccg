import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => (
    <div>
        <Link to="/">Home</Link>
        <Link to="/hello">Hello</Link>
    </div>
);

export default NavBar;
