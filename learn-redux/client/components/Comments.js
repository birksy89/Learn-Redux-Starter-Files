import React, { Component } from 'react';

export default class Comments extends Component {
  renderComment(comment, index) {
    console.log(comment);

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

  render() {
    const { postComments } = this.props;

    return (
      <div className="comments">
        {postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
