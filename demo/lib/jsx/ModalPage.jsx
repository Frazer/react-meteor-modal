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

      ////  for  AlertModal

      showAlertModal: false,
      alertModalText: 'Alert',

      ////  for  ControlledModal
      controlledModalOpen: false,

    };
  }



///////////// You might want to use these functions

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


//////////
  //passed to the confirm modal
  exampleFunction(){
    this.alertModal("this is using the AlertModal. Notice the focus is automatically on the ok button,  and after this closes, you can control where the focus should go by using a ref tag", this.refs.controlFocus);
  }





////////////  this is to control the ControlModal.  The functions above to control the alert modal are based on these

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


///////////////////////


  render () {
    return (
      <div>
      Here is an example of a confirm modal that triggers an Alert Modal.

        <ConfirmModal openButtonTitleTag="confirm"  openButtonClassName="confirm" 
                      openButtonText="Example of Confirm Modal" title="It's over!" 
                      text="This will show an AlertModel if you click confirm" 
                      modalConfirmButtonText="Are you sure?" 
                      onConfirmFunction={this.exampleFunction.bind(this)}   // this should be the function you want triggered - ie: this.functionBeingChecked.bind(this)
                      />

        <AlertModal isOpen={this.state.showAlertModal} close={ this.closeAlertModal.bind(this)}
            alertModalText={this.state.alertModalText}
          />

        The examples below are simpler examples to show the basics of Modal
     

        <EnclosedModal title="Enclosed" 
            shouldCloseOnOverlayClick={true}
            text="hi, this should close if you click outside the box"/ >

        <EnclosedModal title="Enclosed 2" text="hi there"/>
        
        <ControlledModal closeModal={ this.closeControlledModal.bind(this) } isOpen={ this.state.controlledModalOpen } />
        <button onClick={ this.openControlledModal.bind(this) } ref="controlFocus">Open Controlled Modal</button>
      </div>
    );
  }
}
