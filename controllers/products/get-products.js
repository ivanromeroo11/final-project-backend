const errors = require('../../misc/errors');
const { getProducts } = require('../../models/products');

module.exports = (db) => async (req, res, next) => {
    

     const response = await getProducts(await db)();
     console.log(response);
    if(!response.ok) return next(errors[500])
    res.status(200).json({
        success: true,
        data:{
            products: response.content.products,
        },
    });
};