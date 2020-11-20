import React, { Component } from "react";

// Componente PostDetail
import PostDetail from "../../components/PostDetail";

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    console.log(this.props);
    fetch(`http://localhost:8080/entries/${this.props.match.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          post: data.data.entry,
        });
      });
  }
  render() {
    const hasPost = Boolean(Object.entries(this.state.post).length);
    return (
      <div>
        <PostDetail
          title={this.state.post.title}
          subtitle={this.state.post.subtitle}
          author={this.state.post.author}
          imageUrl={this.state.post.imageUrl}
          content={this.state.post.content}
          authorImage={this.state.post.authorImage}
          date={this.state.post.date}
          timeToRead={this.state.post.timeToRead}
        />
      </div>
    );
  }
}

export default Story;
