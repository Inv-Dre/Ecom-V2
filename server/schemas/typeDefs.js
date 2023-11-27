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
    _id: ID!
    productName:String!
    quantity:String!
    price:String! 
    description:String!
    image: String
    productId: String!  
  }

type Product{
    _id: ID!
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
    addCart(input:AddCartInput!): User
    removeCart(_id: ID!):User
}
`;
module.exports = typeDefs;