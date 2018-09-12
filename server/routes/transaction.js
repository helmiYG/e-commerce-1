const router = require('express').Router()
const {insert, remove} = require('../controllers/transaction');
const isLogin = require('../midlewares/isLogin');
router.post('/', isLogin, insert)
      .put('/:id', remove)

module.exports = router