import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // useSelector 추가

function MyNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // 로그인 상태 가져오기

  const handleLogoClick = () => {
    navigate(isLoggedIn ? "/home" : "/"); // 로그인 상태에 따라 이동 페이지 변경
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{ minHeight: "80px" }}>
      <Container>
        <Navbar.Brand onClick={handleLogoClick}>React-Log</Navbar.Brand>
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
