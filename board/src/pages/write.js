import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../store/store.js";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Write(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim().length < 5) {
      alert("제목은 5글자 이상 입력해야 합니다.");
      return;
    }
    if (content.trim().length < 10) {
      alert("내용은 10글자 이상 입력해야 합니다.");
      return;
    }
    dispatch(addPost({ title, content }));
    navigate("/home");
  };

  return (
    <div className="container mt-4">
      <form className="write-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label text-light">
            제목
          </label>
          <input
            type="text"
            id="title"
            className="form-control dark-input"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {title.trim().length < 5 && (
            <Form.Text className="text-danger">
              제목은 5글자 이상 입력해야 합니다.
            </Form.Text>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="content" className="form-label text-light">
            내용
          </label>
          <textarea
            id="content"
            className="form-control dark-input"
            rows={10}
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {content.trim().length < 10 && (
            <Form.Text className="text-danger">
              내용은 10글자 이상 입력해야 합니다.
            </Form.Text>
          )}
        </div>

        <Button
          variant="primary"
          type="submit"
          disabled={title.trim().length < 5 || content.trim().length < 10}
        >
          작성 완료
        </Button>
      </form>
    </div>
  );
}

export default Write;
