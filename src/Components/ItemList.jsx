import React from "react";
import Item from "./Item";
import { Container, Row } from "react-bootstrap";

const Itemlist = ({ productList }) => {
  return (
    <Container fluid>
      <Row>
        {productList.map((prod) => (
          <Item
            key={prod.id}
            id={prod.id}
            title={prod.title}
            iMg={prod.img}
            price={prod.price}
            category={prod.category}
            description={prod.description}
            stock={prod.stock}
          />
        ))}
      </Row>
    </Container>
  );
};
export default Itemlist;
