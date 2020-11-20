import React, { useState, useEffect } from "react";

// Reactstrap
import { Container, Row, Col } from "reactstrap";

// Components
import MiddlePosts from "../../components/MiddlePosts";
import PostItem from "../../components/PostItem";
import TrendingPost from "../../components/TrendingPost";
import FeaturedPost from "../../components/FeaturedPost";
import Follow from "../../components/PostItem/Follow";
import Footer from "../../components/Footer/";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/entries/")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data.entries);
      });
  }, []);

  const middlePosts = posts.slice(0, 4);
  console.log(middlePosts);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <FeaturedPost />
          </Col>
          <Col>
            {middlePosts.map((post) => (
              <MiddlePosts
                authorName={post.author}
                title={post.title}
                image={post.imageUrl}
              />
            ))}
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
