const express = require('express');

const { Op } = require('sequelize');

const orm = require('../database/sequelize');


const router = express.Router();


router.get('/products', async (req, res, next) => {

    const names = await orm.models.Product.findAll({
        attributes: [
            'name',
            'price'
        ]
    });

    console.log(JSON.stringify(names, null, 2));

    res.json({
        result: names
    });


});

router.get('/productsRawQuery', async (req, res, next) => {

    const [results, metadata] = await orm.sequelize.query('SELECT * FROM products ORDER BY price');

    console.log(JSON.stringify(results, null, 2));

    res.json({
        results 
    });


});


router.get('/cuentaProductos', async(req, res) => {

    const result = await orm.models.Product.findAll({
        attributes: [
            [orm.sequelize.fn('COUNT',orm.sequelize.col('*')),'cuentaRegistros']
        ]
    });

    console.log(JSON.stringify(result, null, 2));

    res.json({
        result
    });


});


router.get('/productosRangoPrecio', async(req, res) => {

    const { max, min } = req.query;

    const result = await orm.models.Product.findAll({

        where: {
            price: {
                [Op.and]: [
                    {
                        [Op.gt]: min
                    },
                    {
                        [Op.lt]: max
                    }
                ]
            } 
        }

    });

    console.log(JSON.stringify(result, null, 2));

    res.json({
        result
    });

});

router.get('/productosPorNombre/:criterio', async (req, res) => {

    const { criterio } = req.params

    console.log(criterio);

    const result = await orm.models.Product.findAll({

        where: {
            name: {
                [Op.like]: `%${criterio}%`
            } 
        }

    });

    console.log(JSON.stringify(result, null, 2));

    res.json({
        result
    });



});


module.exports = router;

