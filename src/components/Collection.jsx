import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import "./home.css"; // Import the custom styles
import Bag from '../assets/bag.jpg';
import Dress from '../assets/dress.jpg';
import Makeup from '../assets/makeup.jpg';

const CollectionsSection = () => {
  const collectionsData = [
    {
      title: "Spring Collection",
      image: Bag,
      link: "#spring",
    },
    {
      title: "Men's Collection",
      image: Dress,
      link: "#mens",
    },
    {
      title: "Makeup Collection",
      image: Makeup,
      link: "#autumn",
    },
  ];
console.log(collectionsData)
  return (
    <>
      {" "}
      <h2 className="section-title">Collections</h2>
      <Row>
        {collectionsData.map((collection, index) => (
          <Col key={index} sm={12} md={4} className="collection-item">
            <img src={collection.image} alt={collection.title} />
            <h3 className="collection-title">{collection.title}</h3>
            <a href={collection.link} className="shop-now-link">
              Shop Now <FaArrowRight className="arrow-icon" />
            </a>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CollectionsSection;
