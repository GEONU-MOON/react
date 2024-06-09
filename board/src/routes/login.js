import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "http://3.34.252.191:8080/api";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 유효성 검사 (아이디, 비밀번호 입력 여부 확인)
    if (!username || !password) {
      setError("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      const requestData = { username, password }; // 요청 데이터 객체 생성

      console.log("로그인 요청 데이터:", requestData); // 요청 데이터 출력

      const response = await axios.post(
        `${API_BASE_URL}/user/login`,
        requestData
      );

      // 로그인 성공 시 토큰 저장 (localStorage 사용 예시)
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      console.error("로그인 실패:", error);
      setError(error.response?.data?.message || "로그인에 실패했습니다.");
    }
  };

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

        {error && <Alert variant="danger">{error}</Alert>}

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
