'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      idProduct: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      code: {
        type: Sequelize.STRING(4),
        unique: true,
        allowNull: false
      },
      idDepartment: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'departments'
          },
          key: 'idDepartment'
        },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      origen: {
        type: Sequelize.ENUM('NATIONAL','IMPORTED'),
        allowNull: false,
        defaultValue: 'NATIONAL'
      },
      state: {
        type: Sequelize.ENUM('NEW','USED'),
        allowNull: false,
        defaultValue: 'NEW'
      },
      price: {
        type: Sequelize.DECIMAL(8,2),
        allowNull: false,
        defaultValue: 0        
      },
      taxPercent: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: false,
        defaultValue: 0
      },
      shipping: {
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
    await queryInterface.dropTable('products');
  }
};