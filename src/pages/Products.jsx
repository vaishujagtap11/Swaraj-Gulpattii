import {products} from "../data/products.js";
import ProductCard from "../components/ProductCard";
import "../styles/product.css";

const Products = () => {
  return (
    <div className="products-page">
      <h1>Our Products</h1>

      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
