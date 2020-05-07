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
                    <i className="fa fa-users" /> Usuários
                </Link>
                <Link to="/books">
                    <i className="fa fa-books" /> Livros
                </Link>
            </nav>
        </aside>