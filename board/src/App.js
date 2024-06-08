import "./App.css";
import { useState } from "react";
import { Container, Nav, Navbar, Row, Col, Card } from "react-bootstrap";
import Write from "./routes/write.js";
import Edit from "./routes/edit.js";
import Detail from "./routes/detail.js";
import Login from "./routes/login.js";
import Register from "./routes/register.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { PencilSquare } from "react-bootstrap-icons";
import axios from "axios";
import { useSelector } from "react-redux";
import Home from "./routes/home.js";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark" style={{ minHeight: "80px" }}>
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            React-Log
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/write">
              <PencilSquare /> 작성하기
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} /> // home 페이지 라우트 추가
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
