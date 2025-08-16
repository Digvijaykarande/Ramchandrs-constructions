import React, { useEffect, useState } from "react";
import "../../../styles/HomePage.css"; 
import HomeProduct from "../../../components/organisms/HomeProducts";
const slides = [
  {
    id: 1,
    title: "Build Your Dream Project",
    desc: "Shop cement, steel, and hardware at best prices.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    id: 2,
    title: "Quality Materials, Trusted Brands",
    desc: "Iron rods, pipes, paints and more, all in one place.",
    img: "https://plus.unsplash.com/premium_photo-1681989490797-dbe51c438b61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "From Foundation to Finish",
    desc: "Get everything you need for your construction journey.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // Auto-slide every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div className="hero">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="overlay">
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <button>Shop Now</button>
            </div>
          </div>
        ))}
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === current ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
      <HomeProduct />
    </div>
  );
}

export default HomePage;
