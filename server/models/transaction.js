const mongoose = require('mongoose');
const Schema = mongoose.Schema

let itemSc = new Schema ({itemName: String, price: Number, qty: Number, total: Number})
let cartSchema = new Schema({
    itemCart: [itemSc],
    totalPrice: Number, 
    userId: {type: Schema.Types.ObjectId, ref: 'User'}
})

let Cart = mongoose.model('Cart',cartSchema)
module.exports = Cart