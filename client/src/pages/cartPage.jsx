import { useState, useEffect } from 'react';
import{ useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { useMutation } from '@apollo/client';
import { REMOVE_FROM_CART } from '../utils/mutations';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

// import { getMe, deleteBook } from '../utils/API';
import Auth from '../utils/auth';
import { removeProductId } from '../utils/localStorage';

const CartPage = () => {


 const {loading,data} = useQuery(GET_ME)

 const userData = data?.me || {}

 const [removeFromCart] =useMutation(REMOVE_FROM_CART)

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteProduct = async (productId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const {response} = await removeFromCart({
        variables: {productId}
      });
      // upon success, remove book's id from localStorage
      removeProductId(productId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing saved Products!</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {userData.cart?.length
            ? `Viewing ${userData.cart.length} saved ${userData.cart.length === 1 ? 'product' : 'products'}:`
            : 'You have no cart items!'}
        </h2>
        <Row>
          { userData.cart && userData.cart.map((product) => {
            return (
              <Col md="4">
                <Card key={product.productId} border='dark'>
                  {product.image ? <Card.Img src={product.image} alt={`The image for ${product.productName}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{product.productName}</Card.Title>
                    <p className='small'>Price: {product.price}</p>
                    <p className='small'> Quantity: {product.quantity}</p>
                    <Card.Text>{product.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteProduct(product.productId)}>
                      Delete this Product!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default CartPage;