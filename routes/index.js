const router = require('express').Router()

const authRoutes = require('./auth')
const productsRoutes = require('./products')
const userRoutes = require('./users')


module.exports = (db) => {
    router.use('/auth', authRoutes(db))
    router.use('/users', userRoutes(db))
    router.use('/products', productsRoutes(db))

    return router
}