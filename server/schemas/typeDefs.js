const typeDefs = `
type User{
    _id: ID!
    username: String!
    email: String!
    password: String! 
    productCount: Int
    cart: [Product]
}
input AddCartInput {
    productName:String!
    quantity:String!
    price:String! 
    description:String!
    image: String
    productId: String!  
  }

type Product{
    productName:String!
    quantity:String!
    price:String! 
    description:String!
    image: String 
    productId: String!
}

type Auth{
    token: ID!
    user: User
}

type Query{
    # users: [User]!
    # user(userId: ID!): User
    me: User
}

type Mutation{
    login(email: String!, password: String!): Auth
    addUser(username:String!, email: String!, password: String!): Auth
    addtoCart(input:AddCartInput!): User
    removeFromCart(productId: ID!):User
}
`;
module.exports = typeDefs;