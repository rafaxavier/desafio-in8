const User = require('../models/User');

module.exports = {

    async findAll(req, res){
        return res.status(200).json(User);
    },

    async store(req, res){
        // console.log(req.body);
        const user = req.body;

        User.push(user);
        return res.status(201).json({msg:'criado com sucesso'});
    },

};