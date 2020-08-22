'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      models.Order.belongsTo(models.Client, {
        as: 'client',
        foreignKey: {
          name: 'idClient',
          type: DataTypes.INTEGER,
          allowNull: false
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      });

      models.Order.hasMany(models.OrderDetail, {
        as: 'details',
        foreignKey: {
          name: 'idOrder',
          type: DataTypes.INTEGER,
          allowNull: false
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

    }
  };
  Order.init({
    idOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING(4),
      allowNull: false,
      unique: true
    },
    orderDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};