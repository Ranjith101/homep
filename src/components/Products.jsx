import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./home.css"; // Import the custom styles
import Bag from '../assets/bag.jpg';
import Dress from '../assets/dress.jpg';
import Makeup from '../assets/makeup.jpg';
import Shoe from '../assets/shoe.jpg';


const PopularProductsSection = () => {
  const productsData = [
    {
      title: "Product 1",
      image: Bag,
      price: "$19.99",
    },
    {
      title: "Product 2",
      image: Dress,
      price: "$24.99",
    },
    {
        title: "Product 3",
        image: Makeup,
        price: "$10.99",
      },
      {
        title: "Product 4",
        image: Shoe,
        price: "$64.99",
      },
      {
        title: "Product 5",
        image: Bag,
        price: "$9.99",
      },
      {
        title: "Product 6",
        image: Dress,
        price: "$4.99",
      },
      {
          title: "Product 7",
          image: Makeup,
          price: "$2.99",
        },
        {
          title: "Product 8",
          image: Shoe,
          price: "$8.99",
        }

  ];

//   const renderProducts = () => {
//     return productsData.map((product, index) => (
//       <Col key={index} sm={12} md={3} className="product-item">
//         <img src={product.image} alt={product.title} />
//         <h3 className="product-title">{product.title}</h3>
//         <p className="product-price">{product.price}</p>
//       </Col>
//     ));
//   };

//   const renderAdditionalProducts = () => {
//     const additionalProducts = productsData.slice(4); // Get the additional products
//     return additionalProducts.map((product, index) => (
//       <Col key={index} sm={12} md={3} className="product-item">
//         <img src={product.image} alt={product.title} />
//         <h3 className="product-title">{product.title}</h3>
//         <p className="product-price">{product.price}</p>
//       </Col>
//     ));
//   };

const renderProducts = () => {
    return productsData.map((product, index) => (
      <Col key={index} sm={12} md={3} className="product-item">
        <img src={product.image} alt={product.title} />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">{product.price}</p>
      </Col>
    ));
  };

  const renderAdditionalProducts = () => {
    const additionalProducts = productsData.slice(4); // Get the additional products
    return additionalProducts.map((product, index) => (
      <Col key={index} sm={12} md={3} className="product-item">
        <img src={product.image} alt={product.title} />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">{product.price}</p>
      </Col>
    ));
  };
return (
    <>
      {/* <h2 className="section-title">Popular Products</h2>
      <Row>
        {renderProducts()}
      </Row>
      <Button variant="primary" className="load-more-button">
        Load More
      </Button>
      <h2 className="section-title">Products</h2>
      <Row>
        {renderAdditionalProducts()}
      </Row>
      <Button variant="primary" className="shop-now-button">
        Shop Now
      </Button> */}
       <h2 className="section-title">Popular Products</h2>
      <Row>
        {renderProducts()}
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Button variant="primary" className="load-more-button">
            Load More
          </Button>
        </Col>
      </Row>
      <h2 className="section-title">Products</h2>
      <Row>
        {renderAdditionalProducts()}
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Button variant="success" className="shop-now-buttons">
            Shop Now
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default PopularProductsSection;
