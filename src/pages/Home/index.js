import React from "react";
import { Container, Row, Col } from "reactstrap";
import MiddlePosts from "../../components/MiddlePosts";
import PostItem from "../../components/PostItem";
import Follow from "../../components/PostItem/Follow";
import Footer from "../../components/Footer/"


function Home() {
  return (
    <div>
      <h1>Componente Home desde f/hhh</h1>
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
      <Container>
        <Row>
          <PostItem></PostItem>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <PostItem />
          </Col>
          <Col md="5">
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
