import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/HomeProducts.css";

function HomeProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://rmc-backend-o8q8.onrender.com/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="loading">Loading products...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="products-container">
      <h2 className="products-title">Construction Essentials</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div
            className="product-card"
            key={product.id || product._id || index}
            onClick={() => navigate(`/product/${product.id || product._id}`)}
          >
            <img
              src={product.image_url || "https://placehold.co/200"}
              alt={product.name}
              className="product-image"
              loading="lazy"
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₹{product.price}</p>
              <span className="product-unit">{product.unit}</span>
              <button className="add-to-cart">Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeProducts;
