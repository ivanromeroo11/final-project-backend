const { sql } = require('slonik')

const getAllProducts = () => sql.unsafe`
SELECT *
FROM products
`

module.exports = {
    getAllProducts,
}