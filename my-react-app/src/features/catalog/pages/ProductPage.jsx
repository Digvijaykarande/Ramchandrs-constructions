import React from "react";
import "../../../styles/ProductsPage.css";

function ProductsPage() {
  const products = [
    { id: 1, name: "Welding Machine", price: "₹8,500", unit: "per piece", image: "https://m.media-amazon.com/images/I/51ZiwgXuL6L._SY445_SX342_QL70_FMwebp_.jpg" },
    { id: 2, name: "Cement Bag (50kg)", price: "₹380", unit: "per bag", image: "https://m.media-amazon.com/images/I/71boHPqP+8L._SL1500_.jpg" },
    { id: 3, name: "Cement Blocks", price: "₹45", unit: "per block", image: "https://m.media-amazon.com/images/I/41b2c6wiMdL._SY445_SX342_QL70_FMwebp_.jpg" },
    { id: 4, name: "Iron Rods", price: "₹60", unit: "per kg", image: "https://m.media-amazon.com/images/I/41g5ZIMzgoL.jpg" },
    { id: 5, name: "Safety Helmet", price: "₹250", unit: "per piece", image: "https://m.media-amazon.com/images/I/31qpWXXlVVL._SX300_SY300_QL70_FMwebp_.jpg" },
    { id: 6, name: "Drill Machine", price: "₹4,200", unit: "per piece", image: "https://m.media-amazon.com/images/I/51cOffS2qgL._SX300_SY300_QL70_FMwebp_.jpg" },
    { id: 7, name: "Sand (1 Ton)", price: "₹1,200", unit: "per ton", image: "" },
    { id: 8, name: "Bricks", price: "₹6", unit: "per brick", image: "https://m.media-amazon.com/images/I/41a+O7IZwGL._SX300_SY300_.jpg" },
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
