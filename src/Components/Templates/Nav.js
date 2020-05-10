import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default props => 
        <aside className="menu-area">
            <nav className="menu">
                <Link to="/">
                    <i className="fa fa-home" /> Início
                </Link>
                <Link to="/users">
                    <i className="fa fa-users" /> Usuário
                </Link>
                <Link to="/books">
                    <i className="fa fa-book" /> Livro
                </Link>
            </nav>
        </aside>