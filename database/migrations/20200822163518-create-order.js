'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      idOrder: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      code: {
        type: Sequelize.STRING(4),
        allowNull: false,
        unique: true
      },
      orderDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: new Date()
      },
      idClient: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'clients'
          },
          key: 'idClient'
        },
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  }
};