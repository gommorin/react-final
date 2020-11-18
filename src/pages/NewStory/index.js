import React, { Component } from "react";

// Reactstrap
import { Button, Alert } from "reactstrap";

class NewStory extends Component {
  constructor(props) {
    super(props);
    this.state = "New Story";
  }

  render() {
    return (
      <div>
        <h1>Componente New Story desde feature/NewStory</h1>
        <Button color="danger">Danger!</Button>
        <Alert color="primary">This is a primary alert — check it out!</Alert>
      </div>
    );
  }
}

export default NewStory;
