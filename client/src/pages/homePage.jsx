import SearchBar from "../components/searchBar";
import Slideshow from "../components/slideShow";
import CartBtn from "../components/cart";
import ProductCard from "../components/productCard";

const products = [
  {
     "productName": "Amazon Fire TV 50 inch 4-Series 4K UHD smart TV, stream live TV without cable",
     "quantity": "250",
     "price":"298.99",
     "description":"Display Size:50 inches Refresh Rate:60 hertz Resolution:4K  Model Year:2021",
     "image":"https://m.media-amazon.com/images/I/51QBHKpw5dL._AC_UY218_.jpg",
     "productId":"1"
  },
  {
      "productName": "Crocs",
      "quantity":"1000",
      "price":"32.86",
      "description":"Black Unisex-Adult Classic Clogs",
      "image":"https://m.media-amazon.com/images/I/81Vekenn4lL._AC_SX695_.jpg",
      "productId":"2"
  }
] 

export default function HomePage() {
  return (
    <>
    <div>
      <SearchBar />
      <CartBtn />
      <Slideshow />
    </div>
    <div className='flex-container'>
      {products.map((product)=>{return(<ProductCard key= {product.productId} productName={product.productName} price={product.price} quantity={product.quantity} description={product.description} image={product.image}/>)})}
    </div>
    </>
  );
}
