const User = require('../models/User')

module.exports = {

    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res) {
        const { name, email } = req.body;

        // Simple Validation
        if(!name || !email) {
            return res.status(400).json({ msg: 'Preencha todos os dados' });
        };

        // Check for existing user
        const existing = await User.findOne({ where: { email } })
        
        if(existing) return res.status(400).json({ msg: 'Usuário já existe' })

        // Create user

        const user = await User.create({ name, email });

        return res.json(user)
    },

    async update(req, res) {
        const { userId } = req.params;
        const { name, email } = req.body;

        let user = await User.findByPk(userId);

        // Check if user exist
        if(!user) return res.status(400).json({ msg: 'Usuário não existe' });

        // Update fields
        if(name) {
            user.name = name
        };
        if(email) {
            user.email = email
        };

        return res.json(user);
    }
};