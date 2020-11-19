import React, { Component } from 'react'

class Story extends Component {
  constructor(props){
    super(props)
    this.state = "Story"
  }

  render() {
    return (
      <div>
        <h1>Your master plan to Learn Golang Fast and Deep</h1>
      </div>
    )
  }
}

export default Story