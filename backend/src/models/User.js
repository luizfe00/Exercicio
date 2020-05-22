const { Model, DataTypes } = require('sequelize')
const validator = require('validator')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true,
                }
            },
        }, {
            sequelize,
            tableName: 'users'
        })
    }

    static associate(models) {
        this.belongsToMany(models.Book, { foreignKey: 'userId', through: 'users_books', as: 'books' });
    }
}

module.exports = User;