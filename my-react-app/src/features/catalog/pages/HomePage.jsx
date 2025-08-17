import React, { useEffect, useState } from "react";
import "../../../styles/HomePage.css"; 
import HomeProduct from "../../../components/organisms/HomeProducts";
const slides = [
  {
    id: 1,
    title: "Build Your Dream Project",
    desc: "Shop cement, steel, and hardware at best prices.",
    img: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg",
  },
  {
    id: 2,
    title: "Quality Materials, Trusted Brands",
    desc: "Iron rods, pipes, paints and more, all in one place.",
    img: "https://images.pexels.com/photos/162639/digger-machine-machinery-construction-162639.jpeg",
  },
  {
    id: 3,
    title: "From Foundation to Finish",
    desc: "Get everything you need for your construction journey.",
    img: "https://images.pexels.com/photos/32865462/pexels-photo-32865462.jpeg",
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
