import React, { Component } from 'react';

export default class Comments extends Component {
  constructor(props) {
    super( props );  
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderComment(comment, index) {
    //console.log(comment);

    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    // Get the post ID
    const { postId } = this.props.params;
    // Get the form values
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    // Call the actionCreator
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();

  }

  render() {
    const { postComments } = this.props;

    return (
      <div className="comments">
        {postComments.map(this.renderComment)}
        <form
          onSubmit={this.handleSubmit}
          ref="commentForm"
          className="comment-form"
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
