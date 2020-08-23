const express = require('express');

const { Op } = require('sequelize');

const orm = require('../database/sequelize');


const router = express.Router();



router.get('/details/:orderId', async (req, res, next) => {

    const { orderId } = req.params;
   

    const result = await orm.models.Order.findAll({
        attributes: {
            include: [[orm.sequelize.literal(`(SELECT SUM(quantity * priceApplied * (1 + taxPercentApplied / 100) + shippingApplied) FROM order_details WHERE idOrder=${orderId})`), 'total']]
        },
        where: {
            idOrder: orderId
        },
        include: {
            model: orm.models.OrderDetail,
            as: 'details',
            attributes: {
                include: [[orm.sequelize.literal('(quantity * priceApplied * (1 + taxPercentApplied / 100) + shippingApplied)'), 'subTotal']]
            }
        }

    });

    res.json({
        result
    });

});

module.exports = router;

