import React, { Component } from 'react'
import './User.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addUser, getUsers } from '../Actions/userActions'
import Main from '../Templates/Main'

export class User extends Component {
    
    componentDidMount() {
        this.props.getUsers();
    }

    state = {
        name: ''
    }

    static propTyper ={
        addUser: PropTypes.func.isRequired,
        getUsers: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const newUser = {
            name: this.state.name
        }

        // Add User via addUser action
        this.props.addUser(newUser)
        this.setState({ name: ''})
    }


    render() {
        const { users } = this.props.user
        
        return (
            <Main>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <input type="name" id="user" name="name" className="form-control" placeholder="Nome do Livro" onChange={this.onChange} />
                        <button type="submit" class="btn btn-success">Criar</button> 
                    </form> 
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Usuário</th>
                            </tr>
                        </thead>
                        {users.map(({ _id, name }) => (
                        <tbody>
                            <tr>
                                <th scope="row" ><strong>{}</strong></th>
                                <td><strong>{name}</strong></td>
                            </tr>
                        </tbody>
                     ))}
                    </table>
                </div>      
            </Main>    
        )
    }
}

const mapStateToProps = state => ({
    user: state.users,

})

export default connect(mapStateToProps, { addUser, getUsers })(User)
