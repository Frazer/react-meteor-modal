import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import EnclosedModal  from './EnclosedModal.jsx';
import ControlledModal  from './ControlledModal.jsx';


export default class ModalPage  extends Component {
  constructor(props) {
    super(props);

   this.state = {
      controlledModalOpen: false,
    };
  }

  openModal () {
    this.setState({
      controlledModalOpen : true
    });
  }

  closeModal () {
    this.setState({
      controlledModalOpen : false
    });
  }

  render () {
    return (
      <div>

        <EnclosedModal title="t1" text="hi"/>

        <EnclosedModal title="t2" text="hi there"/>
        
        <ControlledModal closeModal={ this.closeModal.bind(this) } isOpen={ this.state.controlledModalOpen } />
        <button onClick={ this.openModal.bind(this) }>Open Controlled Modal</button>
      </div>
    );
  }
}