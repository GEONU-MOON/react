import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/store.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(""); // 로그인 메시지 상태 추가

  const { isLoggedIn, loginError } = useSelector((state) => state.auth);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("/data/user.json");
      const userData = response.data;
      const user = userData.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        dispatch(login());
        navigate("/home");
      } else {
        setLoginMessage("아이디 또는 비밀번호가 일치하지 않습니다."); // 로그인 실패 메시지 설정
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoginMessage("사용자 데이터를 가져오는 중 오류가 발생했습니다."); // 에러 메시지 설정
    }
  };

  if (isLoggedIn) {
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
        {loginMessage && <Alert variant="danger">{loginMessage}</Alert>}
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
