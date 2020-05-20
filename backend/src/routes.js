const express = require('express');
const UserController = require('./controllers/UserController')
const BookController = require('./controllers/BookController')

const routes = express.Router();

// Criar Usuário
routes.post('/users', UserController.store);

// Receber Usuários
routes.get('/users', UserController.index)

// Criar Livro - Associado à Usuário
routes.post('/users/:userId/books', BookController.store)

// Buscar Livros - Associado ao Usuário
routes.get('/users/:userId/books', BookController.index)

// Excluir Livros - Associado ao Usuário
routes.delete('/users/:userId/books', BookController.delete)

module.exports = routes;