import React from "react";
import "../../../styles/CategoriesPage.css";

const categories = [
  { name: "Cement", img: "https://img.icons8.com/ios-filled/100/000000/concrete-truck.png" },
  { name: "Steel & Iron", img: "https://img.icons8.com/ios-filled/100/000000/steel.png" },
  { name: "Bricks & Blocks", img: "https://img.icons8.com/ios-filled/100/000000/brick-wall.png" },
  { name: "Hardware Tools", img: "https://img.icons8.com/ios-filled/100/000000/hammer.png" },
  { name: "Safety Equipment", img: "https://img.icons8.com/ios-filled/100/000000/safety-helmet.png" },
  { name: "Machinery Rental", img: "https://img.icons8.com/ios-filled/100/000000/excavator.png" },
];

function CategoriesPage() {
  return (
    <div className="categories-page">
      <h2 className="categories-title">Shop by Categories</h2>
      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.img} alt={cat.name} className="category-img" />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
