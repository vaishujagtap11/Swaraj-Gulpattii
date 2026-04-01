import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/product.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [selectedUnit, setSelectedUnit] = useState(product.units[0]);

  // Weight / volume multiplier
  const getMultiplier = (unit) => {
    if (unit === "1 Kg" || unit === "1 Liter") return 1;
    if (unit === "1/2 Kg" || unit === "500 ml") return 0.5;
    if (unit === "1/4 Kg" || unit === "250 ml") return 0.25;
    return 1;
  };

  const finalPrice = Math.round(Number(product.pricePerUnit) * getMultiplier(selectedUnit));

  const handleAddToCart = () => {
    addToCart(product, selectedUnit, finalPrice); // pass correct price
  };

  return (
    <div className="product-card jaggery-theme">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <select
          className="quantity-select"
          value={selectedUnit}
          onChange={(e) => setSelectedUnit(e.target.value)}
        >
          {product.units.map((unit, index) => (
            <option key={index} value={unit}>
              {unit}
            </option>
          ))}
        </select>

        <h4>₹{finalPrice}</h4>

        <button className="add-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
