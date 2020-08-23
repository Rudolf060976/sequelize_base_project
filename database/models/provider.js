'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Provider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      models.Provider.belongsToMany(models.Product, {
        through: models.ProductsProviders,
        uniqueKey: 'idProductsProvider',
        foreignKey: {
          type: DataTypes.INTEGER,
          name: 'idProvider',
          allowNull: false
        }                
      });

    }
  };
  Provider.init({
    idProvider: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    code: {
      type: DataTypes.STRING(4),
      unique: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Provider',
    tableName: 'providers'
  });
  return Provider;
};