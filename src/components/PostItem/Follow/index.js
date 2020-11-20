import { Component } from "react";
import { Button, Row  } from 'reactstrap';
import "./Follow.css"

class Follow extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
  }

  render() {
      return (
    <div>    
        <Row>
            <div className="Followc">
              <h2>CREATORS TO FOLLOW</h2>
              <div className="FollowContainer">
                <img className="imageF" src="#"></img>
                <h2> Wil Wheaton</h2>
                <Button outline color="success">Follow</Button>{' '}
              </div>
            </div>
            <div className="FollowContainer">
              <img className="imageF" src="#"></img>
              <h2>Anil Dash</h2>
              <Button outline color="success">Follow</Button>{' '}
            </div>
           <div >
              <h5>TOPICS TO FOLLOW</h5>
              <div>
              <h5>Coronavirus</h5>
              <Button outline color="success">Follow</Button>{' '}
              </div>
              <div>
                <h5>Software Engineering</h5>
                <Button outline color="success">Follow</Button>{' '}
              </div>
              <div>
                 <h5>Lifestyle</h5>
                 <Button outline color="success">Follow</Button>{' '}
               </div>
            </div>
        </Row> 
        <a> See more </a>  
    </div>
      )
  }
}

export default Follow