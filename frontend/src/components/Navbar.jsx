import {Link} from 'react-router-dom';
import React from 'react';
function Navbar() {
    return <nav className="navbar bg-dark container">
        <h4><Link to="/">Home</Link></h4>
        <h4><Link to="/notes">Notes</Link></h4>
        <h4><Link to="/create">Create Notes</Link></h4>
        
    </nav>



}
export default Navbar;
