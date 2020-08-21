'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('special_product_data', {
      idProductData: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idProduct: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'products'
          },
          key: 'idProduct'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      actualCost: {
        type: Sequelize.DECIMAL(8,2),
        allowNull: false,
        defaultValue: 0
      },
      nameInCharge: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      lastBuy: {        
        type: Sequelize.DATEONLY
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
    await queryInterface.dropTable('special_product_data');
  }
};