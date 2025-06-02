import React from 'react';
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/" className='myLink'>Home</Link>
                </li>
                <li>
                    <Link to="/about" className='myLink'>About</Link>
                </li>
                <li>
                    <Link to="/contact" className='myLink'>Contact</Link>
                </li>
                <li>
                    <Link to="/products" className='myLink'>Products</Link>
                </li>
            </ul>
            
        </div>
    );
}

export default Navbar;