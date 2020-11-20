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
             <div className="Midlepost">
                <div>
                <h5> $Author name</h5>
                <h5> $Title</h5>
                </div>
                <div>
                <img src = "https://picsum.photos/200"/>
                </div>
              </div>
              
              <div>
                <span className="sizeletter">{this.state.isFeatured ? '$Read More ·' : '' } $Month $Day · $Minute min read {this.state.isStarred ? <StarIcon width="15" /> :'' }</span>
              </div>
          </div>
      </Row>
    </div>
      )
  }
}

export default MiddlePosts
