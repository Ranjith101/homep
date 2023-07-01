import React from "react";
import "./home.css"; // Import the custom styles
import Test1 from '../assets/test1.jpg';
import Test2 from '../assets/test2.jpg';

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      name: "John Doe",
      designation: "CEO, Company Name",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac tincidunt felis. Mauris interdum ultricies sem in laoreet.",
      image: Test1,
    },
    {
      name: "Jane Smith",
      designation: "Marketing Manager",
      feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac tincidunt felis. Mauris interdum ultricies sem in laoreet.",
      image: Test2,
    },
  ];

  const renderTestimonials = () => {
    return testimonialsData.map((testimonial, index) => (
      <div key={index} className="testimonial-box">
        <img src={testimonial.image} alt={testimonial.name} className="client-image" />
        <h3 className="client-name">{testimonial.name}</h3>
        <p className="client-designation">{testimonial.designation}</p>
        <p className="client-feedback">{testimonial.feedback}</p>
      </div>
    ));
  };

  return (
    <div className="testimonials-section">
      <h2 className="section-title">Client's Testimonials</h2>
      <div className="testimonials-container">
        {renderTestimonials()}
      </div>
    </div>
  );
};

export default TestimonialsSection;
