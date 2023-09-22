import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="nav">
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/articles">Articles</NavLink></li>
                <li><NavLink to="/create">Create Articles</NavLink></li>
                <li><NavLink>Contacto</NavLink></li>
            </ul>
        </nav>
  )
}
