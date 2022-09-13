const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const tokenSign = async (user) =>{
    const sign = jwt.sign({
        _id: user._id,
        email: user.email

    },
    JWT_SECRET,
    {expiresIn : "10h"}
    );

    return sign
}

//pasar el jwt = tokenJwt
const verifyToken = async (tokenJwt) =>{
    try {
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch (error) {
        return null
    }
}

module.exports = {tokenSign, verifyToken}



