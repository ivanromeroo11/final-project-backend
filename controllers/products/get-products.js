const errors = require('../../misc/errors');
const { getProducts } = require('../../models/products');

module.exports = (db) => async (req, res, next) => {
    

     const response = await getProducts(await db)();
     console.log(response);

    res.status(200).json({
        success: true,
        data:{
            response,
        },
    });
};