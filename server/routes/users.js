const router = require('express').Router()
const ControllerUser = require('../controllers/users')
// /api/users
router.get('/', ControllerUser.findAll)
router.post('/register', ControllerUser.create)
router.post('/login', ControllerUser.login)



module.exports = router