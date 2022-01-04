import {userSchema} from "../models/userNewModels.js"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
const user = mongoose.model('user', userSchema)
const wordToken ="12345678"
import bcrypt, { hash } from 'bcrypt'


export const addUser = (req, res, next)=>{

    bcrypt.hash(req.body.password,10)
    .then(hash =>{
        const newUser = new user({
            name: req.body.name,
            email:req.body.email,
            password: hash
        })
        newUser.save()
        .then(()=> res.status(201).json({message: 'utilisateur crée'}))
        .catch(error => res.status(400).json({error}))
    })
    .catch(error => res.status(500).json({error}))
   
}

export const login = (req, res, next)=>{
    user.findOne({email: req.body.email})
    .then(user=>{
        if(!user){
            return res.status(401).json({error: "utilisateur introuvable"})
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid=>{
            if(!valid){
                return res.status(401).json({error: "mot de passe incorrect"})
            }

            let jwtToken = jwt.sign({
                userId: user._id
            },
            wordToken, {expiresIn: '24h'}
            )
            res.header('Authorization', 'Bearer ' + jwtToken)
            return res.status(200).json('auth_ok')
            res.set()
        })
    })


}
export const getUser = (req, res)=>{
  
    user.find((err, user)=>{
        if(err){
            res.send(err)
        }
        res.json(user)
    })
}

export const getUserById = (req, res)=>{
  
    user.findById(req.params.userId, (err, user)=>{
        if(err){
            res.send(err)
        }
        res.json(user)
    })
}

export const updateUser = (req, res)=>{
  
    user.findByIdAndUpdate({_id: req.params.userId},req.body, {new: true}, (err, user)=>{
        if(err){
            res.send(err)
        }
        res.json(user)
    })
}

export const deleteUser = (req, res)=>{
  
    user.remove({_id: req.params.userId}, (err, user)=>{
        if(err){
            res.send(err)
        }
        res.json(user)
        console.log(`user:${user} effacé`)
    })
}