const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
    },
    description:{
        type: String,
    }, 
    productId: {
        type: String,
        required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    }
})

const Product = model('Product', productSchema);

module.exports = Product;
// module.exports = productSchema;