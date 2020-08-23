'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      models.OrderDetail.belongsTo(models.Order, {
        as: 'order',
        foreignKey: {
          name: 'idOrder',
          type: DataTypes.INTEGER,
          allowNull: false
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      models.OrderDetail.belongsTo(models.Product, {
        as: 'product',
        foreignKey: {
          name: 'idProduct',
          type: DataTypes.INTEGER,
          allowNull: false
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      });


    }
  };

  OrderDetail.init({
    idOrderDetail: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    quantity: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 1,
      validate: {
        isNumeric: true
      }
    },
    priceApplied: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        min: 0
      }
    },
    taxPercentApplied: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        min: 0,
        max: 100
      }
    },
    shippingApplied: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'OrderDetail',
    tableName: 'order_details'
  });
  return OrderDetail;
};