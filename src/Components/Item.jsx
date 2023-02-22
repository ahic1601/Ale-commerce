import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

const Item = ({ title, stock, iMg, category, id }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={iMg} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Categoria: {category}</ListGroup.Item>
          <ListGroup.Item>
            <Button variant="warning">
              Stock <Badge bg="danger">{stock}</Badge>
            </Button>
          </ListGroup.Item>
        </ListGroup>
        <Link to={`/Item/${id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
