import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';


export default class ListItem  extends Component {
  constructor(props) {
    super(props);
  }


  confirm(){
    this.props.confirmFunction(this.props.confirmText, "Sure?", this.props.ModalConfirmedFunction, '');
  }

  render () {

    text = this.props.children ? this.props.children : "Click here to use listItem " + this.props.number;
    return (
      <div>
         <button className="share" title={"button " + this.props.number + " in a child Component"} onClick={this.confirm.bind(this)}>{text}</button>
      </div>
    );
  }
}

ListItem.propTypes = {
  confirmText:    PropTypes.any.isRequired,
  
};


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


