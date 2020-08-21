require('custom-env').env(true,__dirname + './../');

const { Sequelize, DataTypes } = require('sequelize');

const Models = require('./models/index');

const env = process.env.NODE_ENV || 'development';


const config = require('./config.js')[env];

class Orm {

    constructor(credentials) {

        this.credentials = credentials;


        this._sequelize = null;

    }


    connect() {

        const { database, username, password, host, port, dialect } = this.credentials;

        try {
          
            const sequelize = new Sequelize(database, username, password, {    
                host,
                port,
                dialect   
            });

            this._sequelize = sequelize;

            
        } catch (error) {
            
            throw error;
        }

    }


    createModels() {

        Models.forEach(model => {

            model(this._sequelize, DataTypes);

        });

    }

    createAssociations() {

        const models = this._sequelize.models;

        Object.keys(models).forEach(modelClass => {

            if(modelClass.associate) {
                modelClass.associate(models);
            }

        });

    }

    get sequelize() {

        return this._sequelize;
    }

    get models() {

        return this._sequelize.models;

    }

    get Sequelize() {

        return Sequelize;
    }




}


const orm = new Orm(config);


module.exports = orm;