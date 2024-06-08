import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../store.js";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Write(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="container mt-4">
      <form
        className="write-form"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(addPost({ title, content }));
          navigate("/home");
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label text-light">
            제목
          </label>
          <input
            type="text"
            id="title"
            className="form-control dark-input"
            placeholder="제목을 입력하세요"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
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
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          작성 완료
        </button>
      </form>
    </div>
  );
}

export default Write;
