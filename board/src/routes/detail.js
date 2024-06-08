import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../store";
import { useNavigate } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  const post = posts.find((p) => p.id === parseInt(id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!post) {
      alert("존재하지 않는 게시글입니다.");
      navigate("/");
    }
  }, [post, navigate]);

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(deletePost(parseInt(id))); // id를 숫자로 변환
      navigate("/");
    }
  };

  if (!post) return null; // post가 없으면 null 반환 (로딩 중 처리)

  return (
    <div className="container mt-4">
      <div className="write-form">
        <div className="mb-3">
          <label htmlFor="title" className="form-label text-light">
            제목
          </label>
          <input
            type="text"
            id="title"
            className="form-control dark-input"
            value={post.title}
            readOnly
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
            value={post.content}
            readOnly
          />
        </div>

        <div className="d-flex justify-content-end mt-3">
          <Link to={`/edit/${id}`} className="btn btn-warning me-2">
            수정하기
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
