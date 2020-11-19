import React from "react";
import { Container, Row, Col } from "reactstrap";
import MiddlePosts from "../../components/MiddlePosts";
import PostItem from "../../components/PostItem";
import Follow from "../../components/PostItem/Follow";


function Home() {
  return (
    <div>
      <h1>Componente Home desde f/home</h1>
      <Container>
        <Row>
          <Col>
            <PostItem />
          </Col>
          <Col>
            <MiddlePosts />
            <MiddlePosts />
            <MiddlePosts />
            <MiddlePosts />
          </Col>
          <Col>
            <Follow />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
