import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import EnclosedModal  from './EnclosedModal.jsx';
import ControlledModal  from './ControlledModal.jsx';
import ConfirmModal  from './ConfirmModal.jsx';
import AlertModal  from './AlertModal.jsx';


export default class ModalPage  extends Component {
  constructor(props) {
    super(props);

   this.state = {

      showAlertModal: false,
      alertModalText: 'Alert',

      controlledModalOpen: false,

    };
  }


  alertModal(text, returnModalFocusTo){
    
      this.setState({
        alertModalText: text,
        showAlertModal: true,
        returnModalFocusTo: returnModalFocusTo,     ///  what to give .focus to after closing Modal
      });
           
  }

  closeAlertModal() {
    this.setState({
      showAlertModal: false,
    });
    if (this.state.returnModalFocusTo){
      ReactDOM.findDOMNode(this.state.returnModalFocusTo).focus();
      this.setState({
        returnModalFocusTo: false,
      });
    }
  }



  openControlledModal () {
    this.setState({
      controlledModalOpen : true
    });
  }

  closeControlledModal () {
    this.setState({
      controlledModalOpen : false
    });
  }

  render () {
    return (
      <div>

        <ConfirmModal openButtonTitleTag="delete"  openButtonClassName="delete" 
                      openButtonText="&times;" title="It's over!" 
                      text="This will delete this card from your deck" 
                      modalConfirmButtonText="Gone for good?" 
                      onConfirmFunction={this.alertModal("That meme already exists", this.refs.textInput).bind(this)}   // this should be the function you want triggered
                      />

        <AlertModal isOpen={this.state.showAlertModal} close={ this.closeAlertModal.bind(this)}
            alertModalText={this.state.alertModalText}
          />
     

        <EnclosedModal title="Enclosed" 
            shouldCloseOnOverlayClick="true" 
            text="hi, this should close if you click outside the box"/ >

        <EnclosedModal title="Enclosed 2" text="hi there"/>
        
        <ControlledModal closeModal={ this.closeControlledModal.bind(this) } isOpen={ this.state.controlledModalOpen } />
        <button onClick={ this.openControlledModal.bind(this) } ref="controlFocus">Open Controlled Modal</button>
      </div>
    );
  }
}
