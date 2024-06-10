// Navbar.js (수정)
import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/store"; // logout 액션 import

function MyNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    navigate(isLoggedIn ? "/home" : "/");
  };

  const handleLogout = () => {
    dispatch(logout()); // 로그아웃 액션 dispatch
    navigate("/"); // 로그인 페이지로 이동
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
        {isLoggedIn && ( // 로그인 상태일 때만 로그아웃 버튼 표시
          <Button variant="outline-light" onClick={handleLogout}>
            로그아웃
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
