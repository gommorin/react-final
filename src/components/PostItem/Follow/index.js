import { Component } from "react";
import { Button, Row  } from 'reactstrap';

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
            <h2>CREATORS TO FOLLOW</h2>
            <div>
            <h2>Wil Wheaton</h2>
            <Button outline color="success">Follow</Button>{' '}
            </div>
            <div>
            <h2>Anil Dash</h2>
            <Button outline color="success">Follow</Button>{' '}
            </div>
            <h2>TOPICS TO FOLLOW</h2>
            <div>
            <h2>Coronavirus</h2>
            <Button outline color="success">Follow</Button>{' '}
            </div>
            <div>
            <h2>Software Engineering</h2>
            <Button outline color="success">Follow</Button>{' '}
            </div>
            <div>
            <h2>Lifestyle</h2>
            <Button outline color="success">Follow</Button>{' '}
            </div>
            <a> See more </a>
        </Row>   
    </div>
      )
  }
}

export default Follow