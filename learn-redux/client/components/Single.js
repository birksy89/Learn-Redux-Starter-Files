import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends Component {
  render() {
    const { posts, params, comments } = this.props;
    //   index of the post
    const i = posts.findIndex((post) => post.code === params.postId);
    // console.log(i);
    //  get us the post
    const post = posts[i];
    //console.log(post);
    // get the comments
    const postComments = comments[params.postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
}
