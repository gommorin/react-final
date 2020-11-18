import React, { Component } from "react";

// Reactstrap
import { Button } from "reactstrap";

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
      </div>
    );
  }
}

export default NewStory;
