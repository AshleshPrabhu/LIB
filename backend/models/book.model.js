import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    title: {
        type: String,
        required: true 
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        required: true 
    },
    quantity: {
        type: Number,
        required: true 
    },  
    categories: [
        {
            type: String 
        }
    ],
    description: {
        type: String 
    },
    coverImage: {
            type: String,
            default:""
    },
},{timestamps:true});

export const Book = mongoose.model("Book",bookSchema)
