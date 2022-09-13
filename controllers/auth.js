const { matchedData } = require('express-validator');
const {usersModel}= require('../models')
const {tokenSign, verifyToken} = require('../utils/handleJWT')



const postRegister = async(req, res) => {
    const body = matchedData(req)
    console.log(body);
    const dataUser = await usersModel.create(body)

    const data = {
        token: await tokenSign(dataUser),
        user: dataUser

    }
    res.send({data})
};

const postLogin = async(req, res) => {
    req = matchedData(req)
    const user = await usersModel.findOne({email:req.email})
    if (!user) {
        res.send({error:"usuario no existe"})
        return
    }

    const data = {
      token: await tokenSign(user),
      user  
    }

    res.send({data})

};






module.exports = {postRegister, postLogin}