import React, { Component } from 'react'
import Main from '../Templates/Main'
import './Books.css'

export class Books extends Component {
    render() {
        return (
            <Main>
            <div className="container">
                <input type="name" id="name" className="form-control" placeholder="Nome do Livro" />
                <button type="button" class="btn btn-success">Criar</button>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Livro</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </Main>
    )
}
}

export default Books
