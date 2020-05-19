const { Model, DataTypes } = require('sequelize')

class Book extends Model {
    static init(sequelize) {
        super.init({
            title: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'books'
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'bookId', through: 'users_books', as: 'users' })
    }
}

module.exports = Book;