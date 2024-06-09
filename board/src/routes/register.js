import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "http://3.34.252.191:8080/api";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // 이메일 상태 추가
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 유효성 검사 (예시, 이메일 유효성 검사 추가)
    if (!username || !password || !confirmPassword || !email) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!validateEmail(email)) {
      // 이메일 유효성 검사 함수 호출
      alert("올바른 이메일 형식이 아닙니다.");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/user/signup`, {
        username,
        password,
        email,
      });
      console.log("회원가입 성공:", response.data);
      navigate("/"); // 회원가입 성공 시 홈(/) 페이지로 이동
    } catch (error) {
      console.error("회원가입 실패:", error);
      alert("회원가입에 실패했습니다.");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
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

        <Form.Group controlId="confirmPassword" className="mb-3">
          <Form.Label className="text-light">비밀번호 확인</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="비밀번호를 다시 입력하세요"
          />
        </Form.Group>

        <Form.Group controlId="email" className="mb-3">
          {" "}
          <Form.Label className="text-light">이메일 주소</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일 주소를 입력하세요"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          회원가입
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
