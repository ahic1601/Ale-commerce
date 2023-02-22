import React from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemDetail = ({ productList }) => {
  //const { id } = useParams();

  //const productFilter = data.filter((prod) => prod.id == id);

  return (
    //<Container fluid>
        //{productFilter.map((prod) => (
          //<div key={prod.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={prod.iMg} />
              <Card.Body>
                <Card.Title>{prod.title}</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>Categoria: {prod.category}</ListGroup.Item>
                  <ListGroup.Item>
                    <Button variant="warning">
                      Stock <Badge bg="danger">{prod.stock}</Badge>
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
                <Link to="#">
                  <Button variant="primary">Comprar</Button>
                </Link>
              </Card.Body>
            </Card>
          //</div>
       // ))}
    //</Container>
  );
};

export default ItemDetail;
