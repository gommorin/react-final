import { Component } from "react";
import { Row } from 'reactstrap';
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
              <h3> $Author name</h3>
              <h3> $Title</h3>
              <img src = "#"/>
              <span>{this.state.isFeatured ? '$Read More ·' : '' } $Month $Day · $Minute min read {this.state.isStarred ? <StarIcon width="15" /> :'' }</span>
          </div>
      </Row>
    </div>
      )
  }
}

export default MiddlePosts
