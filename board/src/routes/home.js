import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function Home() {
  const posts = useSelector((state) => state.posts);

  return (
    <Container>
      <Row className="justify-content-center">
        {posts.map((post) => (
          <Lists post={post} key={post.id} />
        ))}
      </Row>
    </Container>
  );
}

function Lists({ post }) {
  return (
    <Col xs={12} md={post.isThree ? 4 : 3}>
      <Link to={`/detail/${post.id}`} className="text-decoration-none">
        <Card className="dark-card">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.content}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default Home;
