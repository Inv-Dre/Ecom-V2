import SearchBar from "../components/SearchBar";
import Slideshow from "../components/slideShow";
import CartBtn from "../components/cart";
export default function HomePage() {
  return (
    <div>
      <SearchBar />
      <CartBtn />
      <Slideshow />
    </div>
  );
}