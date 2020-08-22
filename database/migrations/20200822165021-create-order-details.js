'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('order_details', {
      idOrderDetail: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true
      },
      idOrder: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'orders'
          },
          key: 'idOrder'
        },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
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
          onDelete: 'RESTRICT'
      },
      quantity: {
        type: Sequelize.DECIMAL(8,2),
        allowNull: false,
        defaultValue: 1
      },
      priceApplied: {
        type: Sequelize.DECIMAL(8,2),
        allowNull: false,
        defaultValue: 0
      },
      taxPercentApplied: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: false,
        defaultValue: 0
      },
      shippingApplied: {
        type: Sequelize.DECIMAL(8,2),
        allowNull: false,
        defaultValue: 0
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
    await queryInterface.dropTable('order_details');
  }
};