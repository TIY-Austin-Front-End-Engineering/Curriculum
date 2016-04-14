
// import a module from another file.
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav.js';

const Unicorn = React.createClass({
  render: function() {
    return (
      <section>
        <h2>{this.props.name}</h2>
        <ul>
          <li>Power: {this.props.power}</li>
          <li>Color: {this.props.color}</li>
        </ul>
      </section>
    )
  }
});

const CommentForm = React.createClass({
  saveComment: function(e) {
    e.preventDefault();
    let comment = this.refs.commentInput.value;
    this.props.submitComment(comment);
  },
  render: function() {
    console.log(this.props)
    return (
      <form ref="formRef" onSubmit={this.saveComment}>
        <input
          type="text"
          ref="commentInput"
          placeholder="write a comment"/>
      </form>
    )
  }
});

const CommentList = React.createClass({
  render: function() {
    console.log(this.props.comments);
    const listItems = this.props.comments.map((comment, i, arr) => {
      return (<li key={i}>{comment}</li>);
    });
    return (
      <ul>
        {listItems}
      </ul>
    )
  }
})

const LikeButton = React.createClass({
  // getInitialState: function() {
  //   return {
  //     likes: 0
  //   };
  // },
  // addLikes: function() {
  //   // this.setState({likes: this.state.likes+1})
  //   console.log('you clicked the like button')
  // },
  render: function() {
    return (
      <button onClick={this.props.handleClick}>
        {this.props.likes} Likes
      </button>
    )
  }
});

const UnicornDetailsPage = React.createClass({
  getInitialState: function() {
    return {
      likes: 0,
      comments: []
    }
  },
  addLikes: function() {
    this.setState({likes: this.state.likes+1})
  },
  addComment: function(comment) {
    this.setState({comments: this.state.comments.concat([comment])});
  },
  render: function() {
    return (
      <div>
        <Nav/>
        <Unicorn/>
        <CommentList comments={this.state.comments}/>
        <CommentForm submitComment={this.addComment}/>
        <LikeButton
          likes={this.state.likes}
          handleClick={this.addLikes}
          />
      </div>
    )
  }
});

export default UnicornDetailsPage;
