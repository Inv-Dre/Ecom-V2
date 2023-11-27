import SearchBar from "../components/searchBar";
import Slideshow from "../components/slideShow";
import CartBtn from "../components/cart";
import ProductCard from "../components/productCard";
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from "../utils/queries";


export default function HomePage() {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const productData = data?.products || [];

  return (
    <>
      <div>
        <SearchBar />
        <CartBtn />
        <Slideshow />
      </div>
      <div className='flex-container'>
        {
          productData.map((product) => (
            <ProductCard
              key={product.productId}
              productName={product.productName}
              price={product.price}
              quantity={product.quantity}
              description={product.description}
              image={product.image}
            />
          ))}
      </div>
    </>
  );
}