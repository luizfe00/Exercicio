const User = require('../models/User');
const jwt = require('jsonwebtoken');

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
        await User.findOne({ where: { email } })
            .then(user => {
                if(user) return res.status(400).json({ msg: 'Usuário já existe' }) 

                
            });
        
        
        // Create user
        const user = await User.create({ name, email })
            .then(user => {
                // Create Token
                jwt.sign({ id: user.id },
                    'jwtSecret',
                    { expiresIn: 3600 },
                    (err, token) => {
                        if(err) throw err
                        res.json({
                            token,
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }
                        });
                    }
                    );
            });


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
            user.update({ name })
        };
        if(email) {
            user.update({ email })
        };

        return res.json(user);
    }
};