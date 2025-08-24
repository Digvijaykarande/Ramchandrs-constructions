import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/ProductData.css";

function ProductData() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://rmc-backend-o8q8.onrender.com/api/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  if (error) return <h2 style={{ textAlign: "center" }}>Error: {error}</h2>;
  if (!product) return <h2 style={{ textAlign: "center" }}>Product not found</h2>;

  return (
    <div className="product-details-container">
      <div className="product-details-card">
        <div className="product-image">
          <img
            src={product.image_url || "https://placehold.co/300"}
            alt={product.name}
            loading="lazy"
          />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">
            ₹{product.price} <span>({product.unit})</span>
          </p>
          <p className="description">{product.description || "No description available."}</p>

          <div className="contact-box">
            <h3>Contact Info</h3>
            <p>{product.contact_info || "Not provided"}</p>
            {product.contact_info && (
              <a
                href={`tel:${product.contact_info}`}
                className="btn call-btn"
                style={{ marginTop: "10px" }}
              >
                Call Now
              </a>
            )}
          </div>

          <div className="buttons">
            <button className="btn primary">Add to Cart</button>
            <button className="btn secondary" onClick={() => navigate(-1)}>
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductData;
