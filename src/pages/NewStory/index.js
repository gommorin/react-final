import React, { Component } from "react";

// Reactstrap
import { Button, Form, FormGroup, Input, Container, Row, Col } from "reactstrap";


class NewStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      content: "",
      date: "",
      time: "",
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
    console.log(newEntry);

    fetch("http://localhost:8080/entries/",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEntry)
    });

    this.props.history.push("/");


  }

  render() {
    const { title, author, content, date, time, image } = this.state;
    return (
      <div>
        <Container>
          <h2 className= "text-muted">Draft</h2>
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <Col xs="12" md={{ size: 8, offset: 2 }} className= "p-0">
                  <FormGroup>
                    <Input type="text" value={title} name="title" onChange={this.handleNewPostChange} placeholder="Title" className= "text-muted border border-right-0 border-top-0 border-bottom-0 border-secondary rounded-0 "/>
                  </FormGroup>
                </Col>
<<<<<<< HEAD
                <Col xs="12" md={{ size: 8, offset: 2 }} className= "p-0">
                  <FormGroup>
                    <Input type="text" value={author} name="author" onChange={this.handleNewPostChange} placeholder="What's your name?" className= "text-muted border border-right-0 border-top-0 border-bottom-0 border-secondary rounded-0 "/>  
                  </FormGroup>
                </Col>
                <Col xs="12" md={{ size: 8, offset: 2 }} className= "p-0">
                  <FormGroup> 
                    <Input type="text" value={content} name="content" onChange={this.handleNewPostChange} placeholder="Tell your story..." className= "text-muted border border-right-0 border-top-0 border-bottom-0 border-secondary rounded-0"/>  
                  </FormGroup>
                <Col xs="12" md={{ size: 3}} className= "p-0">
                  <FormGroup> 
                    <Input type="date" value={date} name="date" onChange={this.handleNewPostChange}  className= "text-muted border border-right-0 border-top-0 border-bottom-0 border-secondary rounded-0"/> 
                  </FormGroup>
                </Col>
                <Col xs="12" md={{ size: 8, offset: 2 }} className= "p-0"></Col>
                  <FormGroup> 
                    <Input type="number" value={time} name="time" onChange={this.handleNewPostChange} placeholder="How long does your story take to be read? " className= "text-muted border border-right-0 border-top-0 border-bottom-0 border-secondary rounded-0"/> 
                  </FormGroup>
                </Col>
                <Col xs="12" md={{ size: 8, offset: 2 }} className= "p-0">
                  <FormGroup> 
                    <Input type="text" value={image} name="image" onChange={this.handleNewPostChange} placeholder="Write the image URL" className= "text-muted border border-right-0 border-top-0 border-bottom-0 border-secondary rounded-0"/> 
                  </FormGroup>
                </Col>
              <Col xs="12" md={{ size: 8, offset: 2 }} className= "p-0">
                <Button type="submit" className= "w-100 bg-light text-secondary border-light ">Publish</Button>
              </Col>
=======
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
              <Input type="text" value={image} name="image" onChange={this.handleNewPostChange} placeholder="Write the image URL" className= "text-muted"/> 
              </FormGroup>
              <Button type="submit">Publish</Button>
>>>>>>> c5bdd9cb975484c3600fadb41533dcb6ef91aa4e
              </Form>
            </Col>
          </Row>
        </Container>  
      </div>
    );
  }
}

export default NewStory;
