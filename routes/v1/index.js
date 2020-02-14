const express = require('express')
const authRouter = require('./api/authRouter')

const router = express.Router()

router.use('/auth', authRouter)

module.exports = router
