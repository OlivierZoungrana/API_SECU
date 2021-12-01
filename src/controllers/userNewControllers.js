import {userSchema} from "../models/userNewModels.js"
import mongoose from "mongoose"
const user = mongoose.model('user', userSchema)
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