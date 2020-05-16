import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addBook, getBooks, delBook } from '../Actions/bookActions'
import Main from '../Templates/Main'


export class Books extends Component {
   
    componentDidMount() {
        this.props.getBooks();
    }

    state = {
        title: ''
    }

    static propTyper ={
        addBook: PropTypes.func.isRequired,
        getBooks: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const newBook = {
            title: this.state.title
        }
        
        // Add Book via addBook action
        this.props.addBook(newBook)
    }

    onDeleteBook = id => {
        this.props.delBook(id)
    }

    render() {
        
        const { books } = this.props.book
        
        return (
            <Main>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <input type="name" id="book" name="title" className="form-control" placeholder="Nome do Livro" onChange={this.onChange} />
                        <button type="submit" class="btn btn-success">Criar</button> 
                    </form> 
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Livros</th>
                            </tr>
                        </thead>
                        {books.map(({ title, _id }) => (
                        <tbody key={_id}>
                            <tr>
                                <td scope="row">
                                    <strong>{title}</strong>
                                    <button
                                    type="button"
                                    class="btn btn-danger"
                                    onClick={this.onDeleteBook.bind(this, _id)}>x</button>
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
    book: state.books
})
        
export default connect(mapStateToProps, { addBook, getBooks, delBook })(Books)