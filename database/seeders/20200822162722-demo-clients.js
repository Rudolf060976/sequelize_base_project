'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('clients', [
      {
        code: '0001',
        name: 'Rafael Urbina',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: '0002',
        name: 'Roberto Marrero',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: '0003',
        name: 'Pedro Izaguirre',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: '0004',
        name: 'José González',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: '0005',
        name: 'Jesus Briceño',
        createdAt: new Date(),
        updatedAt: new Date()
      }    
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('clients', null, {});
    
  }
};
