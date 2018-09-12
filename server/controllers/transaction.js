const Transaction = require('../models/transaction');

module.exports = {
    insert: ( req, res ) => {
        console.log(req.body);
        const {itemCart, totalPrice} = req.body
        let userId = req.userLogin._id
        Transaction.create({
            itemCart : itemCart,
            totalPrice: totalPrice,
            userId: userId
        })
        .then((result) => {
            res.status(200).json({result, msg: 'succes'})
            
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    },

    remove: ( req, res) => {
        Transaction.deleteOne( {_id : req.params.id})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
    }
};
