const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'users'
        })
    }

    static associate(models) {
        this.belongsToMany(models.Book, { foreignKey: 'userId', through: 'users_books', as: 'books' })
    }
}

module.exports = User;