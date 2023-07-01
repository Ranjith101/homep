import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import "./home.css";
import Container from "react-bootstrap/Container";
import BannerSection from "./banner";
import CollectionsSection from "./Collection";
import PopularProductsSection from "./Products";
import TestimonialsSection from "./Testimonial";
import Header from "./Header";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Header />

      <BannerSection />

      <section className="top-selling-products">
        <br />
        <CollectionsSection />
      </section>
      <section className="product-categories">
        <PopularProductsSection />
      </section>

      <section className="testimonials">
        <TestimonialsSection />
      </section>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
