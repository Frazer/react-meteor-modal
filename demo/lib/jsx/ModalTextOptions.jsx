import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';


export const JustConfirm = () => {
  return (
    <div>
      Really?
    </div>
  );
};

export class ConfirmFunctionAndUseTickBox  extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ticked: false,
    };
  }

  toggle() {
    this.props.toggle();
    this.setState({
      ticked: !this.state.ticked,
    });
  }

  render () {
    return (
      <div><div>This can confirm and run any function you like and</div>
        <label>
          <input
            type='checkbox'
            readOnly
            checked={this.state.ticked}
            onClick={this.toggle.bind(this)}
          />You can check things
        </label>
      </div>
    );
  }
}


