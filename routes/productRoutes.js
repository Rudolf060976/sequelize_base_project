const express = require('express');

const { Op } = require('sequelize');

const orm = require('../database/sequelize');


const router = express.Router();

router.get('/products', async (req, res, next) => {

    const results = await orm.models.Product.findAll({
        attributes: [
            'name',
            'price'
        ]
    });

    console.log(JSON.stringify(results, null, 2));

    res.json({
        results
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


router.get('/productsWDepartment', async (req, res, next) => {


    const results = await orm.models.Product.findAll({
        include: {
            model: orm.models.Department,
            as: 'department',
            required: true,
            
        }

    });

    console.log(JSON.stringify(results, null, 2));

    res.json({
        results
    });

});

router.get('/productWProviders/:productId', async (req, res, next) => {

    const { productId } = req.params;

    const results = await orm.models.Product.findAll({
        where: {
            idProduct: productId
        },
        include: {
            model: orm.models.Provider,
            through: {
                attributes: []
            }
        } 
    });

    console.log(JSON.stringify(results, null, 2));

    res.json({
        results
    });

});


router.get('/productWithAllModels/:productId', async (req, res, next) => {

    const { productId } = req.params;

    const results = await orm.models.Product.findAll({
        where: {
            idProduct: productId
        },
        include: {
            all: true
        } 
    });

    console.log(JSON.stringify(results, null, 2));

    res.json({
        results
    });

});


router.post('/new', async (req, res, next) => {

    const t = await orm.sequelize.transaction();

    try {

        const {
            idDepartment,
            name,
            origen,
            state,
            price,
            taxPercent,
            shipping
        } = req.body;
    
    
        const codes = await orm.models.Code.findAll({
            attributes: ['lastCode'],
            where:{
                tableName: 'products'
            }        
        }, { transaction: t });
    
        const lastCode = codes[0].lastCode;
    
        const nextCode = '00' + (lastCode + 1).toString();
        
        const newProduct = await orm.models.Product.create({
            code: nextCode,
            idDepartment,
            name,
            origen,
            state,
            price,
            taxPercent,
            shipping
        }, { transaction: t });

         await orm.models.Code.update(
            {
                lastCode: lastCode + 1
            },
            {
                where: {
                    tableName: 'products'
                }
        }, { transaction: t }); 

        await t.commit();
    
        res.json({
            newProduct
        });

        
    } catch (error) {
        console.log(error.message);
        await t.rollback();

        res.json({
            error:'COULD NOT CREATE THE PRODUCT'
        })

    }

    

});

module.exports = router;

