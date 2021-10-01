import React from 'react';
import { Link, Router } from 'react-router-dom';

const Menu = () => {
    return(
        <>
            <Router>
                <ul>
                    <li><Link to="/">List task</Link></li>
                    <li><Link to="/create-task">Create Task</Link></li>
                    <li><Link to="/bulk-delete">Bulk Delete</Link></li>
                </ul>
            </Router>
        </>
    )
}

export default Menu;