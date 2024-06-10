import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardItem({ post }) {
  return (
    <Card className="dark-card">
      <Card.Body className="card-body-truncate">
        <Card.Title className="card-title-truncate">{post.title}</Card.Title>
        <hr className="card-divider" />
        <Card.Text className="card-text-truncate">{post.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
