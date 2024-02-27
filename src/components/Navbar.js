import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                {/* <div className="navbar-title">Jingui Xie</div> */}
                <Link to="/" className="navbar-title">Jingui Xie</Link>
                <Link to="/">Home</Link>
                <Link to="/research">Research</Link>
                <Link to="/publications">Publications</Link>
                <Link to="/teaching">Teaching</Link>
                <Link to="/team">Team</Link>
                <Link to="/talks">Talks</Link>
            </div>
        </nav>
    );
};

export default Navbar;
