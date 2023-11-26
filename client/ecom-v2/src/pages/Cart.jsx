import {useState, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {GET_ME} from '../utils/queries';
import {useMutation} from '@apollo/client';

import {
    Container,
    Card,
    Button,
    Row,
    Col
  } from 'react-bootstrap';
  
  
  import Auth from '../utils/auth';
 
  
  const SavedProducts = () => {
  
  
    // use this to determine if `useEffect()` hook needs to run again
  
   const {loading,data} = useQuery(GET_ME)
  
   const userData = data?.me || {}
  
   const [removeCart] =useMutation(REMOVE_CART)
  
    // create function that accepts the book's mongo _id value as param and deletes the book from the database
    const handleDeleteProduct = async (_id) => {
      const token = Auth.loggedIn() ? Auth.getToken() : null;
  
      if (!token) {
        return false;
      }
  
      try {
        const {response} = await removeCart({
          variables: {_id}
        });
        // upon success, remove book's id from localStorage
        removeBookId(_id);
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
        <div fluid className="text-light bg-dark p-5">
          <Container>
            <h1>Viewing saved Products!</h1>
          </Container>
        </div>
        <Container>
          <h2 className='pt-5'>
            {userData.savedBooks?.length
              ? `Viewing ${userData.cart.length} saved ${userData.cart.length === 1 ? 'book' : 'books'}:`
              : 'You have no saved products!'}
          </h2>
          <Row>
            {userData.cart.map((product) => {
              return (
                <Col md="4">
                  <Card key={product._id} border='dark'>
                    {product.image ? <Card.Img src={product.image} alt={`The image for ${product.productName}`} variant='top' /> : null}
                    <Card.Body>
                      <Card.Title>{product.productName}</Card.Title>
                      <p className='small'>Price: {product.price}</p>
                      <Card.Text>{product.description}</Card.Text>
                      <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(product._id)}>
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
  
  export default SavedBooks;
  