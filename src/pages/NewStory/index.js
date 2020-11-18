import React, { Component } from "react";

// Reactstrap
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class NewStory extends Component {
  constructor(props) {
    super(props);
    this.state = "New Story";
  }

  render() {
    return (
      <div>
        <h2 className= "text-muted">Draft</h2>
        <Form>
        <FormGroup>
          <Input type="text" name="Title" id="postTitle" placeholder="Title" className= "text-muted"/>
        </FormGroup>
        <FormGroup> 
          <Input type="text" name="User" id="postUser" placeholder="What's your name?" className= "text-muted"/>  
        </FormGroup>
        <FormGroup> 
          <Input type="text" name="Story" id="postStory" placeholder="Tell your story..." className= "text-muted"/>  
        </FormGroup>
        <FormGroup> 
        <Input type="date" name="Date" id="postDate"  className= "text-muted"/> 
        </FormGroup>
        <FormGroup> 
        <Input type="number" name="minutes" id="postMinutes" placeholder="How long does your post take to be read? (minutes)" className= "text-muted"/> 
        </FormGroup>
        <FormGroup> 
          <Label for="Image" className= "text-muted">Select an image</Label>
        <Input type="file" name="Image" id="postimage"  className= "text-muted"/> 
        </FormGroup>
        <Button>Publish</Button>
        </Form>
      </div>
    );
  }
}

export default NewStory;
