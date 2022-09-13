const express = require('express')
const { postRegister, postLogin } = require('../controllers/auth')
const router = express.Router()
const {validatorUserLogin, validatorUserRegister} = require('../validators/auth')

router.post("/register",  postRegister)
router.post("/login", postLogin)




module.exports = router