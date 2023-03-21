var User = require("../models/User")

class UserController {
    async index(req, res) {
        var users = await User.findAll()
        res.json(users)
    }

    async create(req, res) {
        var { email, name, password } = req.body

        if (email == undefined) {
            res.status(400)
            res.json({ err: "Email Inválido." })
            return
        }

        var emailExists = await User.findEmail(email)

        if (emailExists) {
            res.status(406)
            res.json({err: "O email já está cadastrado!"})
            return
        }

        await User.new(email, password, name)

        res.status(200)
        res.send("Tudo Ok!")
    }
}

module.exports = new UserController()
