const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const Order = require('./Order');
const Product = require('./Product')
// import schema from Product.js

// const productSchema = new Schema({
//   productName: {
//       type: String,
//       required: true,
//   },
//   price: {
//       type: String,
//       required: true,
//   },
//   quantity: {
//       type: String,
//       required: true,
//   },
//   image: {
//       type: String,
//   },
//   description:{
//       type: String,
//   }, 
//   productId: {
//       type: String,
//       required: true,
//   }
// })

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    
    orders: [Order.schema]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
userSchema.virtual('productCount').get(function () {
  return this.cart.length;
});

const User = model('User', userSchema);

module.exports = User;
