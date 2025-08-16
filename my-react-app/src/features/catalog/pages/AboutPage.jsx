import React from "react";
import "../../../styles/AboutPage.css"; // Ensure you have this CSS file for styling

function AboutPage() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Building Trust, One Material at a Time</p>
      </section>

      {/* Company Info */}
      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          We are a modern eCommerce platform dedicated to providing high-quality 
          construction materials and tools. Whether you are an individual buyer 
          or a contractor, we make it simple to get what you need – from cement 
          and iron rods to safety equipment and prefabricated solutions.
        </p>

        <h2>Our Mission</h2>
        <p>
          To revolutionize the way construction materials are purchased, offering 
          convenience, transparency, and reliability through a digital-first 
          platform.
        </p>

        <h2>Our Vision</h2>
        <p>
          To become the most trusted marketplace for construction materials, 
          empowering individuals and businesses with accessible, affordable, 
          and quality products.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Wide range of construction products</li>
          <li>✔ Transparent pricing & quotations</li>
          <li>✔ Mobile-first, user-friendly design</li>
          <li>✔ Future-ready marketplace with vendor options</li>
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;
