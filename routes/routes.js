var express = require("express")
var app = express()
var router = express.Router()
var HomeController = require("../controllers/HomeController")
var UserController = require("../controllers/UserController")

router.get('/', HomeController.index)
router.get('/user', UserController.index)
router.get('/user/:id', UserController.findUser)
router.post('/user', UserController.create)
router.put('/user', UserController.edit)
router.delete('/user/:id', UserController.delete)

module.exports = router;
