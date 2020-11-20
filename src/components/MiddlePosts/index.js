import { Component } from "react";
import { Row } from "reactstrap";
import StarIcon from "../../Icons/StarIcon";
import "./MiddlePosts.css";

class MiddlePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarred: true,
      isFirstPost: true,
      isFeatured: true,
    };
  }

  render() {
    return (
      <div onClick={() => this.props.push(`/story/${this.props.id}`)}>
        <Row>
          <div className="Midpost">
            <div className="Midlepost">
              <div>
                <h5>{this.props.authorName}</h5>
                <h5>{this.props.title}</h5>
              </div>
              <div>
                <img src={this.props.image} />
              </div>
            </div>

            <div>
              <span className="sizeletter">
                {this.state.isFeatured ? "$Read More ·" : ""} $Month $Day ·
                $Minute min read{" "}
                {this.state.isStarred ? <StarIcon width="15" /> : ""}
              </span>
            </div>
          </div>
        </Row>
      </div>
    );
  }
}

export default MiddlePosts;
