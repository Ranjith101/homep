import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import "./home.css";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <div>
              <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Ranjith</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#home" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="#shop" className="nav-link">
                Shop
              </Nav.Link>
              <Nav.Link href="#products" className="nav-link">
                Products
              </Nav.Link>
              <Nav.Link href="#blogs" className="nav-link">
                Blogs
              </Nav.Link>
              <Nav.Link href="#store" className="nav-link">
                Store
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-primary">
                <FaSearch />
              </Button>
              <Button variant="outline-success" className="cart-button">
                <FaShoppingCart />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header