const db = require('../config/connection');
const { Product } = require('../models/Product');
const cleanDb = require('./cleanDB')

const productData = require('./productData.json');

db.once('open', async ()=> {
    await cleanDb("Product",'products');

    await Product.create(productData);

    console.log('Products seeded')
    process.exit(0);
})