import { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Media,Row } from 'reactstrap';
import StarIcon from "../../Icons/StarIcon"
import "./PostItem.css"

class PostItem extends Component {
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
          <CardImg top width="100%" src="https://picsum.photos/seed/picsum/200/300" alt="Card image cap" height="280px"/>
          <CardBody>
            <CardTitle tag="h2">Card title</CardTitle>
            <Media>
              <Media left href="#">
                <Media object data-src="https://picsum.photos/200" height="32px"  />
              </Media>
              <Media body>
                <Media heading className="d-inline">
                  $Author Name
                </Media>
                In $Place
              </Media>
            </Media>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <p>
              <span>{this.state.isFeatured ? '$Read More link ·' : '' } $Month $Day · $Minute min read {this.state.isStarred ? <StarIcon width="15" /> :'' }</span>
            </p>
          </CardBody>
        </Row>
      </Card>
    </div>
      )
  }
}

export default PostItem
