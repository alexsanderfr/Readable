import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/categories' exact activeClassName='active'>
                        Categories
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}