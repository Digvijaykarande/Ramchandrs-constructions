import React from "react";
import "../../../styles/ProductsPage.css";

function ProductsPage() {
  const products = [
    { id: 1, name: "Welding Machine", price: "₹8,500", unit: "per piece", image: "https://via.placeholder.com/200?text=Welding+Machine" },
    { id: 2, name: "Cement Bag (50kg)", price: "₹380", unit: "per bag", image: "https://via.placeholder.com/200?text=Cement+Bag" },
    { id: 3, name: "Cement Blocks", price: "₹45", unit: "per block", image: "https://via.placeholder.com/200?text=Cement+Blocks" },
    { id: 4, name: "Iron Rods", price: "₹60", unit: "per kg", image: "https://via.placeholder.com/200?text=Iron+Rods" },
    { id: 5, name: "Safety Helmet", price: "₹250", unit: "per piece", image: "https://via.placeholder.com/200?text=Safety+Helmet" },
    { id: 6, name: "Drill Machine", price: "₹4,200", unit: "per piece", image: "https://via.placeholder.com/200?text=Drill+Machine" },
    { id: 7, name: "Sand (1 Ton)", price: "₹1,200", unit: "per ton", image: "https://via.placeholder.com/200?text=Sand" },
    { id: 8, name: "Bricks", price: "₹6", unit: "per brick", image: "https://via.placeholder.com/200?text=Bricks" },
  ];

  return (
    <div className="products-page">
      <h1 className="page-title">Construction Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="price">{product.price} <span>({product.unit})</span></p>
            <button className="btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
