const express = require('express');

const { Op } = require('sequelize');

const orm = require('../database/sequelize');


const router = express.Router();

router.get('/providerWProducts/:providerId', async (req, res, next) => {

    const { providerId } = req.params;

    const results = await orm.models.Provider.findAll({
        where: {
            idProvider: providerId
        },
        include: {
            model: orm.models.Product,
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


module.exports = router;

