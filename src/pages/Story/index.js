import React, { Component } from 'react'

class Story extends Component {
  constructor(props){
    super(props)
    this.state = {
      post: {}
    }
  }

  componentDidMount(){
    fetch("http://localhost:8080/entries/5fadefa6ebfbc03ee877d6f1")
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      this.setState({
        post: data.data.entry
      })
    })
    
  }
  render() {
    const hasPost = Boolean(Object.entries(this.state.post).length)
    return (
      <div>
        <h1>{hasPost ? this.state.post.title : " No hay title"}</h1> 
      </div>
    )
  }
}

export default Story