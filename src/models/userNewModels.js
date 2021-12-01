import mongoose from "mongoose"

export const userSchema = mongoose.Schema({

    name:{
        type: String,
        required: "votre nom"
    },

    email:{
        type: String,
        required: "votre email"
    },

    password: {
        type: String,
        required: "votre password"
    },

    created_at : {
        type: Date, 
        default: Date.now
    }
})