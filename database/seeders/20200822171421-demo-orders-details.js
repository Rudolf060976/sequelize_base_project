'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.sequelize.transaction( async t => {

      const [clients, metaClient] = await queryInterface.sequelize.query('SELECT idClient FROM clients', { transaction: t });

      await queryInterface.bulkInsert('orders', [
        {
          code: '0001',
          orderDate: new Date(),
          idClient: clients[0].idClient,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: '0002',
          orderDate: new Date(),
          idClient: clients[1].idClient,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: '0003',
          orderDate: new Date(),
          idClient: clients[2].idClient,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: '0004',
          orderDate: new Date(),
          idClient: clients[3].idClient,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: '0005',
          orderDate: new Date(),
          idClient: clients[4].idClient,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: '0006',
          orderDate: new Date(new Date() + 1 * 24 * 60 * 60 * 1000),
          idClient: clients[0].idClient,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], { transaction: t });

      const [orders, metaOrder] = await queryInterface.sequelize.query('SELECT idOrder FROM orders', { transaction: t });

      const [products, metaProducts] = await queryInterface.sequelize.query('SELECT idProduct FROM products', { transaction: t });


      await queryInterface.bulkInsert('order_details', [
        {
          idOrder: orders[0].idOrder,
          idProduct: products[0].idProduct,
          quantity: 2,
          priceApplied: 45.99,
          taxPercentApplied: 16.00,
          shippingApplied: 5.99,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[0].idOrder,
          idProduct: products[1].idProduct,
          quantity: 3,
          priceApplied: 80.50,
          taxPercentApplied: 16.00,
          shippingApplied: 9.99,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[1].idOrder,
          idProduct: products[2].idProduct,
          quantity: 3,
          priceApplied: 77.50,
          taxPercentApplied: 16.00,
          shippingApplied: 0.00,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[1].idOrder,
          idProduct: products[3].idProduct,
          quantity: 1,
          priceApplied: 340.22,
          taxPercentApplied: 16.00,
          shippingApplied: 12.99,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[2].idOrder,
          idProduct: products[5].idProduct,
          quantity: 3,
          priceApplied: 45.00,
          taxPercentApplied: 16.00,
          shippingApplied: 6.00,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[2].idOrder,
          idProduct: products[6].idProduct,
          quantity: 2,
          priceApplied: 60.00,
          taxPercentApplied: 16.00,
          shippingApplied: 5.99,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[3].idOrder,
          idProduct: products[8].idProduct,
          quantity: 5,
          priceApplied: 12.99,
          taxPercentApplied: 16.00,
          shippingApplied: 2.99,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[3].idOrder,
          idProduct: products[10].idProduct,
          quantity: 3,
          priceApplied: 24.50,
          taxPercentApplied: 16.00,
          shippingApplied: 3.99,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[3].idOrder,
          idProduct: products[12].idProduct,
          quantity: 1,
          priceApplied: 99.99,
          taxPercentApplied: 16.00,
          shippingApplied: 5.99,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[4].idOrder,
          idProduct: products[15].idProduct,
          quantity: 2,
          priceApplied: 32.00,
          taxPercentApplied: 16.00,
          shippingApplied: 4.99,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[4].idOrder,
          idProduct: products[14].idProduct,
          quantity: 4,
          priceApplied: 12.99,
          taxPercentApplied: 16.00,
          shippingApplied: 5.99,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[5].idOrder,
          idProduct: products[13].idProduct,
          quantity: 2,
          priceApplied: 199.95,
          taxPercentApplied: 16.00,
          shippingApplied: 13.59,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[5].idOrder,
          idProduct: products[14].idProduct,
          quantity: 5,
          priceApplied: 12.99,
          taxPercentApplied: 16.00,
          shippingApplied: 5.99,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[5].idOrder,
          idProduct: products[11].idProduct,
          quantity: 2,
          priceApplied: 22.50,
          taxPercentApplied: 16.00,
          shippingApplied: 5.99,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[5].idOrder,
          idProduct: products[9].idProduct,
          quantity: 6,
          priceApplied: 10.45,
          taxPercentApplied: 16.00,
          shippingApplied: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[4].idOrder,
          idProduct: products[7].idProduct,
          quantity: 10,
          priceApplied: 3.99,
          taxPercentApplied: 16.00,
          shippingApplied: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[3].idOrder,
          idProduct: products[4].idProduct,
          quantity: 2,
          priceApplied: 55.00,
          taxPercentApplied: 16.00,
          shippingApplied: 4.99,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[2].idOrder,
          idProduct: products[3].idProduct,
          quantity: 1,
          priceApplied: 340.22,
          taxPercentApplied: 16.00,
          shippingApplied: 12.99,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idOrder: orders[1].idOrder,
          idProduct: products[2].idProduct,
          quantity: 3,
          priceApplied: 77.50,
          taxPercentApplied: 16.00,
          shippingApplied: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ], { transaction: t });

    });

  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.sequelize.transaction( async t => {

      await queryInterface.bulkDelete('order_details', { transaction: t });

      await queryInterface.bulkDelete('orders', { transaction: t });

    });

  }
};
