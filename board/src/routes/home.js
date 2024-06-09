import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Lists from "components/Lists";
import axios from "axios"; // Axios import

const API_BASE_URL = "http://3.34.252.191:8080/api";

function Home() {
  const [posts, setPosts] = useState([]); // posts 상태 관리
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가
  const [error, setError] = useState(null); // 에러 상태 추가

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/posts`);
        setPosts(response.data); // 받아온 데이터로 posts 상태 업데이트
      } catch (error) {
        setError(
          error.response?.data?.message ||
            error.message ||
            "게시글 불러오기 실패"
        );
        console.error("게시글 불러오기 에러:", error);
      } finally {
        setIsLoading(false); // 로딩 상태 종료
      }
    };

    fetchPosts();
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  if (isLoading) {
    return <div>Loading...</div>; // 로딩 중일 때 메시지 표시
  } else if (error) {
    return <div>Error: {error}</div>; // 에러 발생 시 에러 메시지 표시
  }

  return (
    <Container>
      <Row className="gx-3 justify-content-start">
        {posts.map((post) => (
          <Lists post={post} key={post.id} />
        ))}
      </Row>
    </Container>
  );
}

export default Home;
