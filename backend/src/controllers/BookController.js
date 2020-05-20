const Book = require('../models/Book')
const User = require('../models/User')

module.exports = {

    async index(req, res) {
        const { userId } = req.params;

        const user = await User.findByPk(userId, {
            include: { association: 'books',
            attributes: ['title'], 
            through: { attributes: [] } 
        }
        });

        return res.json(user.books);
    },

    async store(req, res) {
        const { userId } = req.params;
        const { title } = req.body;

        const user = await User.findByPk(userId);

        if(!user) return res.status(400).json({ error: 'User not found' });

        const [ book ] = await Book.findOrCreate({
            where: { title }
        })

        await user.addBook(book);

        return res.json(book);

    },

    async delete(req, res) {
        const { userId } = req.params;
        const { title } = req.body;

        const user = await User.findByPk(userId);

        if(!user) return res.status(400).json({ error: 'User not found' });

        const book = await Book.findOne({
            where: { title }
        });

        await user.removeBook(book);

        return res.json({ success: true })
    }
};