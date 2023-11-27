import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Image from "react-bootstrap/Image";
// import jewelryImage from "../assets/jewelery_stock.jpg";
// import lawnMowerImage from "../assets/lawnmower_stock.jpg";
// import tennisRacketImage from "../assets/tenni_racket_stock.jpg";
import "./productCard.css";

function ProductCard(props) {
  return (
    <div className="product-container">
      <Card className="product-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.productName}</Card.Title>
          <Card.Text> Description: {props.description}
          </Card.Text>
          <p>Price: {props.price}</p>
          <p>Quantity: {props.quantity}</p>
          <Button className="card-btn" variant="primary">
            View Product
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
