import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Redux-stagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
