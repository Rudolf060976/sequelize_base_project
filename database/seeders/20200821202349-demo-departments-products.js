'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      
      await queryInterface.sequelize.transaction( async t => {

          

        await queryInterface.bulkInsert('departments', [
          {
            code: '0001',
            name: 'Computers',
            description: 'Computers & Accesories',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0002',
            name: 'Electronics',
            description: 'Computers & Accesories',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0003',
            name: 'Security',
            description: 'Computers & Accesories',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0004',
            name: 'Sports',
            description: 'Computers & Accesories',
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {
          transaction: t
        });

        const [results, metadata] = await queryInterface.sequelize.query('SELECT idDepartment FROM departments', { transaction: t });

        await queryInterface.bulkInsert('products',[
          {
            code: '0001',
            idDepartment: results[0].idDepartment,
            name: 'Sata 500Gb Hard Disk',
            origen: 'IMPORTED',
            state: 'NEW',
            price: 45.99,
            taxPercent: 16.00,
            shipping: 5.99,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0002',
            idDepartment: results[0].idDepartment,
            name: 'HP Deskjet 550ML Printer',
            origen: 'IMPORTED',
            state: 'NEW',
            price: 80.50,
            taxPercent: 16.00,
            shipping: 9.99,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0003',
            idDepartment: results[0].idDepartment,
            name: 'Corsair Vengeance Pro 8GB DDR3 1600Mhz',
            origen: 'IMPORTED',
            state: 'NEW',
            price: 77.50,
            taxPercent: 16.00,
            shipping: 0,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0004',
            idDepartment: results[1].idDepartment,
            name: 'Samsung Galaxy S7 120Gb Unlocked SmartPhone',
            origen: 'IMPORTED',
            state: 'NEW',
            price: 340.22,
            taxPercent: 16.00,
            shipping: 12.99,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0005',
            idDepartment: results[1].idDepartment,
            name: 'JBL Monster Studio Bluetooth HeadPhones',
            origen: 'IMPORTED',
            state: 'NEW',
            price: 55.00,
            taxPercent: 16.00,
            shipping: 4.99,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0006',
            idDepartment: results[1].idDepartment,
            name: 'PS4 Dualshock Controller Black',
            origen: 'IMPORTED',
            state: 'NEW',
            price: 45.00,
            taxPercent: 16.00,
            shipping: 6.00,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0007',
            idDepartment: results[2].idDepartment,
            name: 'DVR 8 channels 1080p HDMI Analog Inputs',
            origen: 'IMPORTED',
            state: 'NEW',
            price: 60.00,
            taxPercent: 16.00,
            shipping: 5.99,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0008',
            idDepartment: results[2].idDepartment,
            name: 'Passive Video Balun',
            origen: 'IMPORTED',
            state: 'NEW',
            price: 3.99,
            taxPercent: 16.00,
            shipping: 0,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0009',
            idDepartment: results[2].idDepartment,
            name: 'CCTV Digital Camera 6mm Lens, CMOS Sony Sensor',
            origen: 'IMPORTED',
            state: 'NEW',
            price: 12.99,
            taxPercent: 16.00,
            shipping: 2.99,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0010',
            idDepartment: results[3].idDepartment,
            name: 'Swimming Professional Lens',
            origen: 'IMPORTED',
            state: 'NEW',
            price: 10.45,
            taxPercent: 16.00,
            shipping: 0,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0011',
            idDepartment: results[3].idDepartment,
            name: 'Basketball Professional Kit',
            origen: 'IMPORTED',
            state: 'NEW',
            price: 24.50,
            taxPercent: 16.00,
            shipping: 3.99,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0012',
            idDepartment: results[3].idDepartment,
            name: 'Tennis Racket with ultra resistent Nylon',
            origen: 'IMPORTED',
            state: 'NEW',
            price: 22.50,
            taxPercent: 16.00,
            shipping: 5.99,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0013',
            idDepartment: results[0].idDepartment,
            name: 'Samsung Led 27" 1080p HDMI Monitor (Refurbished)',
            origen: 'IMPORTED',
            state: 'USED',
            price: 99.99,
            taxPercent: 16.00,
            shipping: 5.99,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0014',
            idDepartment: results[0].idDepartment,
            name: 'Laptop Dell Latitude E6440 (Refurbished)',
            origen: 'IMPORTED',
            state: 'USED',
            price: 199.95,
            taxPercent: 16.00,
            shipping: 13.59,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0015',
            idDepartment: results[3].idDepartment,
            name: 'Running Shoes variety of Colors',
            origen: 'NATIONAL',
            state: 'NEW',
            price: 12.99,
            taxPercent: 16.00,
            shipping: 5.99,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            code: '0016',
            idDepartment: results[3].idDepartment,
            name: '100% Whey Protein 40lb',
            origen: 'NATIONAL',
            state: 'NEW',
            price: 32.00,
            taxPercent: 16.00,
            shipping: 4.99,
            createdAt: new Date(),
            updatedAt: new Date()
          }

        ],{
          transaction: t
        });    
    
      });
      
  },

  down: async (queryInterface, Sequelize) => {
   
   
    await queryInterface.sequelize.transaction( async t => {

      
        await queryInterface.bulkDelete('products', null, { transaction: t });
        await queryInterface.bulkDelete('departments', null, { transaction: t });


    });
    
  }
};
