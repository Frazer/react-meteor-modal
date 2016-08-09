import React, { Component, PropTypes } from 'react';

Layout = React.createClass({
  render () {
    return (
        <div>{ this.props.content }</div>
    );
  }
});
