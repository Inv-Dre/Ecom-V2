import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Image from "react-bootstrap/Image";
// import jewelryImage from "../assets/jewelery_stock.jpg";
// import lawnMowerImage from "../assets/lawnmower_stock.jpg";
// import tennisRacketImage from "../assets/tenni_racket_stock.jpg";
import "./productCard.css";
import { useStoreContext } from "../utils/GlobalState";
import { idbPromise } from "../utils/helpers";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../utils/actions";

function ProductCard(item) { 
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    description,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }
  return (
    <div className="product-container">
      <Card className="product-card" style={{ width: "18rem" }}>
        <Card.Img className="product-image" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text> Description: {description}
          </Card.Text>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          <Button className="card-btn" onClick={addToCart} variant="primary">
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
      {/* <Card className="product-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={lawnMowerImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="card-btn" variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
      <Card className="product-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={tennisRacketImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="card-btn" variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card> */}
    </div>
  );
}

export default ProductCard;
