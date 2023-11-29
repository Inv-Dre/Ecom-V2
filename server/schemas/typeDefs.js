const typeDefs = `
type User{
    _id: ID!
    username: String!
    email: String!
    password: String! 
    productCount: Int
    cart: [Product]
    orders: [Order]
}
input AddCartInput {
    productName:String!
    quantity:String!
    price:String! 
    description:String!
    image: String
    productId: String!
  }
type Category {
    _id: ID
    name: String
}
type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
}
type Product{
    productName:String!
    quantity:String!
    price:String! 
    description:String!
    image: String 
    productId: String!
    category: Category
}

type Auth{
    token: ID!
    user: User
}

type Query{
    # users: [User]!
    # user(userId: ID!): User
    me: User
    products(limit:Int):[Product]
    getProduct(productId: String!): Product!
    categories: [Category]
    order(_id: ID!): Order
    catProducts(category: ID, name: String): [Product]
}

type Mutation{
    login(email: String!, password: String!): Auth
    addUser(username:String!, email: String!, password: String!): Auth
    addToCart(input:AddCartInput!): User
    removeFromCart(productId: ID!):User
    addOrder(products: [ID]!): Order
}
`;
module.exports = typeDefs;