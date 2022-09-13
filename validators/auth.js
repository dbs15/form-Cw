const {check, validationResult} = require('express-validator')


const validatorUserRegister = [
    check('email').exists().notEmpty(),
    (req, res, next) =>{
        try {
            validationResult(req).throw()
            return next()
            
        } catch (error) {
            res.status(403)
            res.send({errors: error.array()})
        }
    }
]

const validatorUserLogin = [
    check('email').exists().notEmpty(),
    (req, res, next) =>{
        try {
            validationResult(req).throw()
            return next()
            
        } catch (error) {
            res.status(403)
            res.send({errors: error.array()})
        }
    }
]

module.exports = {validatorUserLogin, validatorUserRegister}