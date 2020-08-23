'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      models.Product.belongsTo(models.Department, {
        as: 'department',
        foreignKey: {
          type: DataTypes.INTEGER,
          name: 'idDepartment',
          allowNull: false
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });

      models.Product.hasOne(models.SpecialProductData, {
        as: 'specialProduct',
        foreignKey: {
          name: 'idProduct',
          type: DataTypes.INTEGER,
          allowNull: false
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'

      });

      models.Product.belongsToMany(models.Provider, {

        through: models.ProductsProviders,
        uniqueKey: 'idProductsProvider',
        foreignKey: {
          type: DataTypes.INTEGER,
          name: 'idProduct',
          allowNull: false
        }        

      });

      models.Product.hasMany(models.OrderDetail, {
        as: 'orderDetails',
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
  Product.init({
    idProduct: {
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
      type: DataTypes.STRING(100),
      allowNull: false
    },
    origen: {
      type: DataTypes.ENUM('NATIONAL','IMPORTED'),
      allowNull: false,
      defaultValue: 'NATIONAL',
      validate: {        
        isIn: [['NATIONAL','IMPORTED']]
      }
    },
    state: {
      type: DataTypes.ENUM('NEW','USED'),
      allowNull: false,
      defaultValue: 'NEW',
      validate: {        
        isIn: [['NEW','USED']]
      }
    },
    price: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0,
      validate: {        
        isNumeric: true
      }
    },
    taxPercent: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false,
      defaultValue: 0,
      validate: {
        max: 100,
        min: 0,
        isNumeric: true
      }
    },
    shipping: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false,
      defaultValue: 0,
      validate: {        
        isNumeric: true
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products'
  });
  return Product;
};