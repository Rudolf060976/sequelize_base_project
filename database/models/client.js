'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Client.hasMany(models.Order, {
        as: 'orders',
        foreignKey: {
          name: 'idClient',
          type: DataTypes.INTEGER,
          allowNull: false
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      });

    }
  };
  Client.init({
    idClient: {
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
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Client',
    tableName: 'clients'
  });
  return Client;


};