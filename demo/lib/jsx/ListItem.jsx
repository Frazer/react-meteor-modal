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


