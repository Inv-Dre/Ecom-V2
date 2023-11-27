const db = require('../config/connection');
const { Product } = require('../models/');
const cleanDb = require('./cleanDB')

const productData = require('./productData.json');

db.once('open', async ()=> {
    await cleanDb("Product",'products');

    await Product.insertMany(productData);

    console.log('Products seeded')
    process.exit(0);
})