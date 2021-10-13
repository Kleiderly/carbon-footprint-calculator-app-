const express = require('express')
const privateRouter = express.Router()
const {getPrivateDate} = require('../Controller/private')
const {protect} = require('../Middleware/auth')


privateRouter.route('/').get(protect, getPrivateDate);


module.exports = privateRouter;