const { User, Product } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');



const resolvers = {
    Query: {
      
        me: async (parent, args, context) =>{
            try{
            if(context.user){
              return await User.findOne({ _id: context.user._id});
            }
            throw AuthenticationError;
        } catch (error){
            console.log(error)
        }
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
            return {token, user};
        } catch (error){
            console.log(error)
        }
        },

        addCart: async (parent, {input}, context ) => {
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

        removeCart: async (parent, {productId}, context ) => {
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
    }
};

module.exports = resolvers;