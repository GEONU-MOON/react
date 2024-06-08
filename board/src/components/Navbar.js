// src/components/Navbar.jsx
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MyNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{ minHeight: "80px" }}>
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          React-Log
        </Navbar.Brand>
        {location.pathname !== "/" && location.pathname !== "/register" && (
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/write">
              <PencilSquare /> 작성하기
            </Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
