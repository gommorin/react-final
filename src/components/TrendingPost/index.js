import { Component } from "react";
import { Card, Col, Media, Row } from 'reactstrap';
import StarIcon from "../../Icons/StarIcon"
import "./TrendingPost.css"

class TrendingItem extends Component {
  constructor(props){
      super(props)
      this.state = {
        type: "top post",
        isStarred: true,
        isFirstPost: true,
        isFeatured: true
      }
  }

  render() {
      return (

    <div>
      <Card className="border-0">
        <Row>
          <Col sm="2" className="p-0">
          <span className="trending--index">01</span>
          </Col>
          <Col sm="10">
          <Media>
            <Media left href="#">
              <Media object data-src="https://picsum.photos/200" alt="p" />
            </Media>
            <Media body>
              <Media heading>
                <span className="author--name">$author</span>
              </Media>
            </Media>
          </Media>
          <h2 className="trending--title">$Title</h2>
          <span className="meta--data">$Month $Day · $Minute min read {this.state.isStarred ? <StarIcon width="15" /> :'' }</span>
          </Col>
        </Row>
      </Card>
    </div>
      )
  }
}

export default TrendingItem
