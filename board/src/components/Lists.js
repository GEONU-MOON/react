import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";

function Lists({ post }) {
  return (
    <Col xs={12} sm={6} md={4}>
      <Link to={`/detail/${post.id}`} className="text-decoration-none">
        <CardItem post={post} />
      </Link>
    </Col>
  );
}

export default Lists;
