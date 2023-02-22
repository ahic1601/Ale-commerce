import { useState, useEffect } from "react";
import React from "react";
import ItemList from "./ItemList";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { Heading, Center } from "@chakra-ui/react";

const ItemListContainer = () => {
  const { category } = useParams();

  /*    const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const results = await response.json();
    return results;
  };

  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    getProducts().then((product) => setProduct(product));
  }, []); */

  const productFilter = data.filter((prod) => prod.category === category);

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Center bg="#D6EAF8" h="80px" color="black">
          <Heading as="h3" size="2xl">
            {`${category ? category : "Catalogo"}`}
          </Heading>
        </Center>
        {category ? (
          <ItemList productList={productFilter} />
        ) : (
          <ItemList productList={data} />
        )}
      </Row>
    </Container>
  );
};

export default ItemListContainer;

{
  /* <Itemlist productList={data}/> */
}
