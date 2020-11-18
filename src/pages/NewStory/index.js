import React,  { Component } from 'react'

class NewStory extends Component {
    constructor(props){
        super(props)
        this.state = "New Story"
    }

    render() {
        return (
          <div>
            <h1>Componente New Story</h1>
          </div>
        )
    }
}

export default NewStory