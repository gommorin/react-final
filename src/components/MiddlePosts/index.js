import { Component } from "react";
import { Media,Row } from 'reactstrap';
import StarIcon from "../../Icons/StarIcon"
import "./MiddlePosts.css"


class MiddlePosts extends Component {
  constructor(props){
      super(props)
      this.state = {
        isStarred: true,
        isFirstPost: true,
        isFeatured: true
      }
  }

  render() {
      return (
    <div>
      <Row>
          <div className="Midpost">
              <h2> $Author name</h2>
              <h2> $Title</h2>
              <span>{this.state.isFeatured ? '$Read More ·' : '' } $Month $Day · $Minute min read {this.state.isStarred ? <StarIcon width="15" /> :'' }</span>
              <img src = "#"/>
          </div>
      </Row>
    </div>
      )
  }
}

export default MiddlePosts
