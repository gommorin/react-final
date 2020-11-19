import React, { Component } from "react";

// Reactstrap
import { Button, Form, FormGroup, Label, Input } from "reactstrap";


class NewStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      content: "",
      date: "",
      minutes: "",
      image: ""
    };

    this.handleNewPostChange = this.handleNewPostChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleNewPostChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();    
    const { title, author, content, date, time, image } = this.state;
    const newEntry = {
      title: title,
      author: author,
      content: content,
      date: date,
      timeToRead: time,
      imageUrl: image
    }
    console.log(newEntry)

    fetch("http://localhost:8080/entries/",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEntry)
    });
  }

  render() {
    const { title, author, content, date, time, image } = this.state;
    return (
      <div>
        <h2 className= "text-muted">Draft</h2>
        <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Input type="text" value={title} name="title" onChange={this.handleNewPostChange} placeholder="Title" className= "text-muted"/>
        </FormGroup>
        <FormGroup>
          <Input type="text" value={author} name="author" onChange={this.handleNewPostChange} placeholder="What's your name?" className= "text-muted"/>  
        </FormGroup>
        <FormGroup> 
          <Input type="text" value={content} name="content" onChange={this.handleNewPostChange} placeholder="Tell your story..." className= "text-muted"/>  
        </FormGroup>
        <FormGroup> 
        <Input type="date" value={date} name="date" onChange={this.handleNewPostChange}  className= "text-muted"/> 
        </FormGroup>
        <FormGroup> 
        <Input type="number" value={time} name="time" onChange={this.handleNewPostChange} placeholder="How long does your post take to be read? (minutes)" className= "text-muted"/> 
        </FormGroup>
        <FormGroup> 
        <Input type="text" value={image} name="image" onChange={this.handleNewPostChange} placeholder="Write the image URL" className= "text-muted"/> 
        </FormGroup>
        <Button type="submit">Publish</Button>
        </Form>
      </div>
    );
  }
}

export default NewStory;
