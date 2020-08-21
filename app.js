const express = require('express');

const orm = require('./database/sequelize');


//const routes = require('./routes');


const app = express();


try {


    orm.connect();

    orm.createModels();

    orm.createAssociations();


    (async () => {

        await orm.sequelize.authenticate();

        console.log('CONNECTED TO THE DATABASE!!');

        // await orm.sequelize.sync();


        app.listen(3000,() => {

            console.log('SERVER RUNNING ON PORT 3000');

        });

    })();       

} catch (error) {
    
    console.error('UNABLE TO CONNECT TO THE DATABASE!!!', error);

}
