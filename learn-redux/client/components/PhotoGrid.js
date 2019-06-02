import React, { Component } from 'react';
import Photo from './Photo';

export default class PhotoGrid extends Component {
  render() {
    const {posts} = this.props;
    return (
      <div className="photo-grid">
        {posts.map((post, index) => <Photo key={index} i={index} post={post} {...this.props}/>)}
      </div>
    );
  }
}
