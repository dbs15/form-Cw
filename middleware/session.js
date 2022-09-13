const { verifyToken } = require("../utils/handleJWT")

const athMiddleware = async(req, res, next) =>{
    try {
        if (!req.headers.authorization) {
            res.send({error:"no hay token"})
            return
        }

        const token = req.headers.authorization.split(" ").pop()
        const dataToken = await verifyToken(token)

        if (!dataToken._id) {
            res.send({error:"no hay token"})
            return
        }

        next()
        
    } catch (error) {
        res.send({error:"no hay token"})
        console.log(console.error)
        return
        
    }
}

module.exports = athMiddleware

