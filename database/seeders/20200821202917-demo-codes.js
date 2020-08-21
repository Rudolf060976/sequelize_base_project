'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('codes', [
      {      
      tableName: 'Departments',
      lastCode: 4,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {      
        tableName: 'Products',
        lastCode: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {      
        tableName: 'Providers',
        lastCode: 4,
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
