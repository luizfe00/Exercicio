import React, { Component } from 'react'
import './User.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addUser, getUsers, delUser } from '../Actions/userActions'
import Main from '../Templates/Main'

export class User extends Component {

    
    componentDidMount() {
        this.props.getUsers();
    }

    static propTyper ={
        delUser: PropTypes.func.isRequired,
        addUser: PropTypes.func.isRequired,
        getUsers: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    }

    onChange = (e) => {
        this.setState({ name: e.target.value })
    }

    onSubmit = (e, data) => {
        e.preventDefault()

        const newUser = {
            name: this.state.name
        }

        this.setState({ name: "" })

        // Add User via addUser action
        this.props.addUser(newUser)

    }

    onDelete = (id) => {
        this.props.delUser(id)
    }


    render() {
        
        const { users } = this.props.user
       
        return (
            <Main>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <input 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder="Nome do Usuário" 
                        onChange={this.onChange} />
                        <button 
                        type="submit" 
                        class="btn criar btn-success">
                        Criar</button> 
                    </form> 
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Usuário</th>
                            </tr>
                        </thead>
                        {users.map(({ _id, name }) => (
                        <tbody key={_id}>
                            <tr>
                                <td>
                                    <strong>{name}</strong>
                                    <button 
                                    type="button" 
                                    class="btn btn-danger"
                                    onClick={this.onDelete.bind(this, _id)}>x</button>
                                </td>
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

export default connect(mapStateToProps, { addUser, getUsers, delUser })(User)
