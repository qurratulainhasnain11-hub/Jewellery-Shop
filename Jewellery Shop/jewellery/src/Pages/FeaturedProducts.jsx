import React, { useEffect, useState } from "react";
import { getFeaturedProducts } from "../services/api";
import "../Styling/featuredproducts.css";

const FeaturedProducts = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    getFeaturedProducts()
      .then(setFeatured)
      .catch(() => console.error("Error occurred"));
  }, []);

  return (
    <section className="featured">
      <h2>Featured Products</h2>

      <div className="grid">
        {featured.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image_url} alt={item.name} />

            <h3>{item.name}</h3>
            <p>PKR {item.price}</p>
            <small>Stock: {item.stock}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
