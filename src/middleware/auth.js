import jwt from 'jsonwebtoken'
require('dotenv').config()
const wordToken ="12345678"

module.exports =(req, res, next)=>{
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decodedToken = jwt.verify(token, wordToken)
        const userId = decodedToken.userId

        if(req.body.userId && req.body.userId !== userId){
            throw 'invalid user Id'
        }else{
            next()
        }
    }catch{
        res.status(401).json({error: new Error('invalid request')})
    }
}