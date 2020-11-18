import React, { Component } from 'react'

class Story extends Component {
  constructor(props){
    super(props)
    this.state = "Story"
  }

  render() {
    return (
      <div>
        <h1>Componente Story #lucho y #mauro</h1>
      </div>
    )
  }
}

export default Story