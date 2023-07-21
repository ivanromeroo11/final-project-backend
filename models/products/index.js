const { getAllProducts } = require('./queries')


const getProducts = (db) => async ()=> {
    try {
       const result = await db.query(getAllProducts())
        return {ok: true,
        content:{ result ,

        }
    }
    } catch (error) {
        console.info('>error products', error.message)

        return {
            ok:false,
        }
    }
}

module.exports = {
    getProducts
}