import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { updatePost } from "../store";

function Edit() {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  const post = posts.find((p) => p.id === parseInt(id));

  const [editedTitle, setEditedTitle] = useState(post?.title || "");
  const [editedContent, setEditedContent] = useState(post?.content || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!post) {
      alert("존재하지 않는 게시글입니다.");
      navigate("/");
    } else {
      setEditedTitle(post.title);
      setEditedContent(post.content);
    }
  }, [post, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editedTitle.trim().length < 10) {
      alert("제목은 10글자 이상 입력해야 합니다.");
      return;
    }
    dispatch(
      updatePost({
        id: parseInt(id),
        title: editedTitle,
        content: editedContent,
      })
    );
    navigate(`/detail/${id}`);
  };

  if (!post) return null; // post가 없으면 null 반환

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit} className="write-form">
        <Form.Group controlId="title" className="mb-3">
          <Form.Label className="text-light">제목</Form.Label>
          <Form.Control
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />
        </Form.Group>
        <Form.Group controlId="content" className="mb-3">
          <Form.Label className="text-light">내용</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            placeholder="내용을 입력하세요"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          수정 완료
        </Button>
      </Form>
    </Container>
  );
}

export default Edit;
