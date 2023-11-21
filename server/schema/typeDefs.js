const typeDefs = `
type User{
    _id: ID!
    username: String!
    email: String!
    password: String! 
    productCount: Int
    cart: [Product]
}
input cartInput {
    _id: ID!
    productName:String!
    quantity:String!
    price:String! 
    description:String!
    image: String   
  }

type Product{
    _id: ID!
    productName:String!
    quantity:String!
    price:String! 
    description:String!
    image: String   
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
    addCart(input:cartInput!): User
    removeCart(_id: ID!):User
}
`;
module.exports = typeDefs;