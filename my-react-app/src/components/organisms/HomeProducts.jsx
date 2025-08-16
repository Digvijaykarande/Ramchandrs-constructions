import React from "react";
import "../../styles/HomeProducts.css"; 

const products = [
  {
    id: 1,
    name: "Welding Machine",
    price: "₹15,500",
    unit: "per unit",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgXqkS9wspHq5CDGsPgAQBEQb-GS2U-Jrsyg&s",
  },
  {
    id: 2,
    name: "Cement Bag (50kg)",
    price: "₹380",
    unit: "per bag",
    image: "https://m.media-amazon.com/images/I/410lEm+rkiL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    name: "Cement Blocks",
    price: "₹45",
    unit: "per block",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsMK3NkNrzZiEgux2FEfcunOmWLgpzDbnVOQ&s",
  },
  {
    id: 4,
    name: "Iron Rods",
    price: "₹65",
    unit: "per kg",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEdGCujfNpLM414umYEXiDdGt1-ZY3f9QuQg&s",
  },
];

function HomeProducts() {
  return (
    <div className="products-container">
      <h2 className="products-title">Construction Essentials</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <span className="product-unit">{product.unit}</span>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeProducts;
