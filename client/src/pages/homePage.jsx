import SearchBar from "../components/searchBar";
import Slideshow from "../components/slideShow";
import CartBtn from "../components/cart";
import ProductCard from "../components/productCard";
export default function HomePage() {
  return (
    <div>
      <SearchBar />
      <CartBtn />
      <Slideshow />
      <ProductCard />
    </div>
  );
}
