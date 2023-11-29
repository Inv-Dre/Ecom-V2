const { User, Product, Order, Category } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');



const resolvers = {
    Query: {
      
        me: async (parent, args, context) =>{
            try{
            if(context.user){
              const user = await User.findOne({ _id: context.user._id}).populate({
                path: 'orders.products',
                populate: 'category',
              });

              user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
              return user
            }
            throw AuthenticationError;
        } catch (error){
            console.log(error)
        }
        },
        products: async (parent, {limit}) => {
            try{
                const products = await Product.find().limit(limit);
                return products
            }catch (error){
                console.log(error)
            }
        },
        getProduct: async (parent,{productId}) => {
            try{
                const product = await Product.findOne({productId});
                return product
            }catch (error){
                console.log(error)
            }
        },
        catProducts: async (parent, { category, name }) => {
            const params = {};
      
            if (category) {
              params.category = category;
            }
      
            if (name) {
              params.name = {
                $regex: name,
              };
            }
      
            return await Product.find(params).populate('category');
          },
        categories: async () => {
            return await Category.find();
          },
        order: async (parent, { _id }, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'orders.products',
                populate: 'category',
              });
      
              return user.orders.id(_id);
            }
      
            throw AuthenticationError;
          },
    },

    Mutation: {
        addUser: async (parent, {username,email, password}) => {
            try{
                console.log('working')
                console.log(username)
            const user = await User.create({ username, email, password });
            const token = signToken(user);
                console.log(user)
            return { token, user };
            } catch (err){
                console.log(err)
            }
        },
        login: async (parent, {email, password}) => {
            try{
            const user = await User.findOne({ email });
            
            if(!user){
                throw AuthenticationError;
            }
            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw){
                throw AuthenticationError;
            }
           
            const token = signToken(user);
            console.log(user,"user");
            return {token, user};
            
        } catch (error){
            console.log(error)
        }
        },

        addToCart: async (parent, {input}, context ) => {
            try{
            if (context.user){
                return User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$addToSet:{cart:input},
                },
                {
                    new:true,
                    runValidators:true,
                }
                
                );
            }
            } catch (error){
            console.log(error)
        }
        },

        removeFromCart: async (parent, {productId}, context ) => {
            try{
            if (context.user){
                return User.findOneAndUpdate(
                        {_id: context.user._id},
                        {$pull: { cart: {productId}}},
                        { new:true}
                    );
            }
        } catch (error){
            console.log(error)
        }
        },
        addOrder: async (parent, { products }, context) => {
            if (context.user) {
              const order = new Order({ products });
      
              await User.findByIdAndUpdate(context.user._id, {
                $push: { orders: order },
              });
      
              return order;
            }
      
            throw AuthenticationError;
          },
          // updateProduct: async (parent, { _id, quantity }) => {
          //   const decrement = Math.abs(quantity) * -1;
      
          //   return await Product.findByIdAndUpdate(
          //     _id,
          //     { $inc: { quantity: decrement } },
          //     { new: true }
          //   );
          // },
    }
};

module.exports = resolvers;