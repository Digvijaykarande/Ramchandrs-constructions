import React from "react";
import "../../../styles/CategoriesPage.css";

const categories = [
  { name: "Cement", img: "https://img.icons8.com/?size=100&id=sGNseKBhSubP&format=png&color=000000" },
  { name: "Steel & Iron", img: "https://img.icons8.com/?size=100&id=DzecD3VlJ1E6&format=png&color=000000" },
  { name: "Bricks & Blocks", img: "https://img.icons8.com/ios-filled/100/000000/brick-wall.png" },
  { name: "Hardware Tools", img: "https://img.icons8.com/ios-filled/100/000000/hammer.png" },
  { name: "Safety Equipment", img: "https://img.icons8.com/?size=100&id=wD6ehg7PoV8r&format=png&color=000000" },
  { name: "Machinery Rental", img: "https://img.icons8.com/?size=100&id=q4C3TMQi3boG&format=png&color=000000" },
];

function CategoriesPage() {
  return (
    <div className="categories-page">
      <h2 className="categories-title">Shop by Categories</h2>
      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.img} alt={cat.name} loading="lazy" className="category-img" />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
