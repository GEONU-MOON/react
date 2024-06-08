import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { loginUser } from "../store"; // 로그인 액션 생성 함수 (추후 구현 필요)
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // 유효성 검사 (예시)
    if (!username || !password) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    // dispatch(loginUser({ username, password })); // 로그인 액션 dispatch (추후 구현)
    // 로그인 성공 시 메인 페이지로 이동
    navigate("/home");
  };

  return (
    <Container className="mt-4">
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

        <Form.Group controlId="password" className="mb-3">
          <Form.Label className="text-light">비밀번호</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
        </Form.Group>

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
    </Container>
  );
}

export default Login;
