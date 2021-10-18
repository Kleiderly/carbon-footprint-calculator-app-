const express = require('express')
const authRouter = express.Router()
const { register, login, forgotpassword, resetpassword, deleteUsers, users } = require('../Controller/auth')




authRouter.route('/register').post(register)

authRouter.route('/login').post(login)

authRouter.route('/forgotpassword').post(forgotpassword)

authRouter.route('/resetpassword/:resetToken').put(resetpassword)

authRouter.route('/:id').delete(deleteUsers)

authRouter.route('/').get(users)

module.exports = authRouter; 