import { gql } from '@apollo/client';

export const GET_ME = gql`
query me{
    me{
      _id
      username
      cart {
        productName
        quantity
        price
        description
        image
        productId
      } 
      orders {
        _id
        purchaseDate
        products {
          _id
          productName
          description
          price
          quantity
          image
          productId
        }
      }
    }
}
`;

export const GET_PRODUCTS = gql`
query products($limit:Int){
  products(limit:$limit) {
    productName
    quantity
    price
    description
    image
    productId
    category {
      name
    }
  }
}`

export const GET_ONE_PRODUCT = gql`
query getProduct($productId: String!){
  getProduct(productId:$productId){
    productName
    quantity
    price
    description
    image
    productId
  }
}`

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`
export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    catProducts(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;