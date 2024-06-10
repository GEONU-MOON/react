import { useParams, Link, useNavigate } from "react-router-dom";
import "../App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../store/store.js";
import { ArrowLeft } from "react-bootstrap-icons";

function Detail() {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  const post = posts.find((p) => p.id === parseInt(id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!post) {
      alert("존재하지 않는 게시글입니다.");
      navigate("/home");
    }
  }, [post, navigate]);

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(deletePost(parseInt(id)));
      navigate("/home");
    }
  };

  if (!post) return null;

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

        <div className="d-flex justify-content-between mt-3">
          <Link to="/home" className="btn btn-secondary back-link">
            <ArrowLeft />
          </Link>{" "}
          <div>
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
    </div>
  );
}

export default Detail;
