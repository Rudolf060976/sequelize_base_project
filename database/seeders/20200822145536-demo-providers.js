'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.sequelize.transaction(async t => {

      await queryInterface.bulkInsert('providers', [
        {
          code: '0001',
          name: 'AMAZON INC',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: '0002',
          name: 'DELLISON PARKER',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: '0003',
          name: 'MAGNOM ASSOCIATED',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: '0004',
          name: 'BRITISH MAGNOLIUM LINE',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          code: '0005',
          name: 'COCONUT SWEETS INC',
          createdAt: new Date(),
          updatedAt: new Date()
        }  
      ], { transaction: t });


      const [providersResults, metadata] = await queryInterface.sequelize.query('SELECT idProvider FROM providers', { transaction: t });

      const [productsResults, metadata2] = await queryInterface.sequelize.query('SELECT idProduct from products', { transaction: t });


      await queryInterface.bulkInsert('products_providers', [
        {
          idProduct: productsResults[0].idProduct,
          idProvider: providersResults[0].idProvider,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idProduct: productsResults[0].idProduct,
          idProvider: providersResults[1].idProvider,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idProduct: productsResults[1].idProduct,
          idProvider: providersResults[0].idProvider,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idProduct: productsResults[1].idProduct,
          idProvider: providersResults[1].idProvider,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idProduct: productsResults[9].idProduct,
          idProvider: providersResults[2].idProvider,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idProduct: productsResults[10].idProduct,
          idProvider: providersResults[2].idProvider,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idProduct: productsResults[13].idProduct,
          idProvider: providersResults[0].idProvider,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          idProduct: productsResults[13].idProduct,
          idProvider: providersResults[3].idProvider,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], { transaction: t });

    });    
    
  },

  down: async (queryInterface, Sequelize) => {
          
      await queryInterface.bulkDelete('providers', null, {});
         
  }
};
