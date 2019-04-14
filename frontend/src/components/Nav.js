import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark" >
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/' exact activeClassName='active'>
                        Home
                        </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/categories' exact activeClassName='active'>
                        Categories
                        </NavLink>
                </li>
            </ul>
        </nav>
    )
}