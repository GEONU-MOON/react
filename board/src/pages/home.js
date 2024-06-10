import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Lists from "components/Lists";

function Home() {
  const posts = useSelector((state) => state.posts);

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
