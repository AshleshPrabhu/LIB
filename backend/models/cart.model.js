import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }, 
    books: [
        {
            book: { 
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Book', required: true 
            },
            quantity: { 
                type: Number, 
                required: true 
            },
        }
    ],
    totalPrice: { 
        type: Number, 
        default: 0 
    },
}, { timestamps: true });

cartSchema.pre('save', function (next) {
    this.totalPrice = this.books.reduce((total, item) => {
    return total + item.quantity * item.book.price;
    }, 0);
    next();
});

const Cart = mongoose.model('Cart', cartSchema);
