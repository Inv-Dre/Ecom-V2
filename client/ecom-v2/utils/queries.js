import { gql } from '@apollo/client';

export const GET_ME = gql`
query me{
    me{
      _id
      username
      cart{
       productName
       quantity
       price
       description
       image
       _id
      }
    }
}
`;