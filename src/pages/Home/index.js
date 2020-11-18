import React from "react";
import { Container, Row, Col } from "reactstrap";
import PostItem from "../../components/PostItem";


function Home() {
  return (
    <div>
      <h1>Componente Home desde f/home</h1>
      <Container>
        <Row>
          <Col>
            <PostItem />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
