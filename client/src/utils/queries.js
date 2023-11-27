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