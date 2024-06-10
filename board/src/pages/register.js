import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { registerUser } from "../store"; // 회원가입 액션 생성 함수 (추후 구현 필요)
import { useNavigate } from "react-router-dom";
import "../App.css";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // 이메일 상태 추가
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
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

    // dispatch(registerUser({ username, password, email })); // 회원가입 액션 dispatch (추후 구현)
    navigate("/");
  };

  const validateEmail = (email) => {
    // 간단한 이메일 유효성 검사 정규식
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
          {/* 이메일 필드 추가 */}
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
