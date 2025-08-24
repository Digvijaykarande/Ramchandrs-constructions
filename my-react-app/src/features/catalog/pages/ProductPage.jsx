import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/ProductsPage.css";

function ProductsPage() {
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

  if (loading) {
    return <p className="loading">Loading products...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="products-page">
      <h1 className="page-title">Construction Products</h1>
      <div className="products-grid">
        {products.map((product, index) => (
  <div
    className="product-card"
    key={product.id || product._id || index}
    onClick={() => navigate(`/product/${product.id || product._id}`)}
  >
    <img
      src={product.image_url || "https://placehold.co/150"}
      alt={product.name}
      loading="lazy"
    />
    <h2>{product.name}</h2>
    <p className="price">
      ₹{product.price} <span>({product.unit})</span>
    </p>
    <button className="btn">Add</button>
  </div>
))}

      </div>
    </div>
  );
}

export default ProductsPage;
