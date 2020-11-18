import React, { Component } from "react";

class NewStory extends Component {
  constructor(props) {
    super(props);
    this.state = "New Story";
  }

  render() {
    return (
      <div>
        <h1>Componente New Story desde feature/NewStory</h1>
      </div>
    );
  }
}

export default NewStory;
