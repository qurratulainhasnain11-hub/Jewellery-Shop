import React, { useEffect, useState } from "react";
import { addToCart, getAllProducts } from "../services/api";
import "../Styling/productListing.css";

function ProductListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  const handleAddToCartClick = (id) => {
    addToCart(id, 1);
  };

  return (
    <section className="products">
      <h1>Our Collection</h1>

      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="card">
            <img src={p.image_url} alt={p.name} />

            <h3>{p.name}</h3>
            <p>PKR {p.price?.toLocaleString()}</p>

            <button onClick={() => handleAddToCartClick(p.id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductListing;
