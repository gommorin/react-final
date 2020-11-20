import React from "react";
import { Container, Row, Col } from "reactstrap";
import MiddlePosts from "../../components/MiddlePosts";
import PostItem from "../../components/PostItem";
import TrendingPost from "../../components/TrendingPost";
import FeaturedPost from "../../components/FeaturedPost";
import Follow from "../../components/PostItem/Follow";
import Footer from "../../components/Footer/"


function Home() {
  return (
    <div>
      <h1>Componente Home desde f/hhh</h1>
      <Container>
        <Row>
          <Col>
            <FeaturedPost />
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
      <hr />
      <Container>
        <Row>
          <Col sm="12">
            <h5>Trending on Medium</h5>
          </Col>
          <Col sm="4">
            <TrendingPost />
            <TrendingPost />
          </Col>
          <Col sm="4">
            <TrendingPost />
            <TrendingPost />
          </Col>
          <Col sm="4">
            <TrendingPost />
            <TrendingPost />
          </Col>
        </Row>
      </Container>
      <hr />
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
