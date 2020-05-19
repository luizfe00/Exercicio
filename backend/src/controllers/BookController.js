const Book = require('../models/Book')
const User = require('../models/Book')

module.exports = {

    async index(req, res) {
        
    },

    async store(req, res) {
        const { userId } = req.params;
        const { title } = req.body;

        const user = await User.findByPk(userId);

        if(!user) return res.status(400).json({ error: 'User not found', userId, title, user });

        const [ book ] = await Book.findOrCreate({
            where: { title }
        })

        await user.addUser(book);

        
    }
};