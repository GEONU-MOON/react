import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardItem({ post }) {
  return (
    <Card className="dark-card">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
