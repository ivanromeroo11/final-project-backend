const router = require('express').Router()

const productsControllers = require('../controllers/products')

module.exports = (db) => {
    router.get('/products', productsControllers.getProducts(db))

    return router
}