const express = require('express');

const orm = require('./database/sequelize');


const departmentRoutes = require('./routes/departmentRoutes');

const productRoutes = require('./routes/productRoutes');

const providerRoutes = require('./routes/providerRoutes');

const orderRoutes = require('./routes/ordersRoutes');


const app = express();



try {


    orm.connect();

    orm.createModels();

    orm.createAssociations();


    app.use('/api/dep', departmentRoutes);

    app.use('/api/prod',productRoutes);

    app.use('/api/prov',providerRoutes);

    app.use('/api/order',orderRoutes);

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
