'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('codes', [
      {      
      tableName: 'departments',
      lastCode: 4,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {      
        tableName: 'products',
        lastCode: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {      
        tableName: 'providers',
        lastCode: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {      
        tableName: 'orders',
        lastCode: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {});    

  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('codes', null, {});
    
  }
};
