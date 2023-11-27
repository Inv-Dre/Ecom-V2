import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import jewelryImage from "../assets/jewelery_stock.jpg";
import lawnMowerImage from "../assets/lawnmower_stock.jpg";
import tennisRacketImage from "../assets/tenni_racket_stock.jpg";
import './slideShow.css';

function Slideshow() {
  return (
    <Carousel className="carouselText">
      <Carousel.Item className="slide">
        <Image className="image" src={jewelryImage} fluid />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="image" src={lawnMowerImage} fluid />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="image" src={tennisRacketImage} fluid />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;
