import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/store.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn, loginError } = useSelector((state) => state.auth);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(login({ username, password }));
  };

  if (isLoggedIn) {
    // 로그인 성공 시 메인 페이지로 이동
    navigate("/home");
    return null;
  }

  return (
    <div className="mt-4">
      <Form onSubmit={handleSubmit} className="write-form">
        <Form.Group controlId="username" className="mb-3">
          <Form.Label className="text-light">아이디</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
        </Form.Group>

        <Form.Group controlId="password" style={{ marginBottom: "60px" }}>
          <Form.Label className="text-light">비밀번호</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
        </Form.Group>
        {loginError && <Alert variant="danger">{loginError}</Alert>}
        <div className="d-flex flex-column align-items-center mt-3">
          <Button variant="primary" type="submit" className="w-100">
            로그인
          </Button>

          <Form.Group className="mt-3">
            <Link
              to="/register"
              className="text-decoration-underline text-light"
            >
              회원가입
            </Link>
          </Form.Group>
        </div>
      </Form>
    </div>
  );
}

export default Login;
