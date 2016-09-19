import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import ControlledAlertModal  from './ControlledAlertModal.jsx';


export default class ControlledAlertDemo  extends Component {
  constructor(props) {
    super(props);

   this.state = {

      ////  for  AlertModal

      controlledModalOpen: false,

 
    };
  }



///////////// You might want to use these functions

  openControlledModal(text, returnModalFocusTo){
    
      this.setState({
        alertModalText: text,
        controlledModalOpen: true,
        returnModalFocusTo: returnModalFocusTo,     ///  what to give .focus to after closing Modal
      });
           
  }

  closeControlledModal() {
    this.setState({
      controlledModalOpen: false,
    });
    if (this.state.returnModalFocusTo){
      ReactDOM.findDOMNode(this.state.returnModalFocusTo).focus();
      this.setState({
        returnModalFocusTo: false,
      });
    }
  }








  render () {
    return (
      <div>

        This example below is a simple example to show a ControlledAlertModal. <br/>   
        Notice the focus ends on the button below - we do this by setting a ref and telling the modal to focus on the ref after closing.
     

        <ControlledAlertModal close={ this.closeControlledModal.bind(this) } closeButtonText="close" isOpen={ this.state.controlledModalOpen } title="Demo Controlled Modal" ><p>This modal is controlled by the parent component. It can be opened and closed by padding props to the component</p></ControlledAlertModal>
        <button onClick={() => { this.openControlledModal("text is hard coded in this example", this.refs.controlFocus) }} >Open Controlled Modal</button>
        <br />
        <button ref="controlFocus">button below</button>

        <br />
        <br />
         This is achieved with
        <pre>
{`import ControlledAlertModal  from './ControlledAlertModal.jsx';


class ControlledAlertDemo  extends Component {
  constructor(props) {
    super(props);

   this.state = {

      controlledModalOpen: false,
 
    };
  }

  openControlledModal(text, returnModalFocusTo){
    
      this.setState({
        alertModalText: text,
        controlledModalOpen: true,
        returnModalFocusTo: returnModalFocusTo,     ///  what to give .focus to after closing Modal
      });
           
  }

  closeControlledModal() {
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


  render () {
    return (

            
        <ControlledAlertModal close={ this.closeControlledModal.bind(this) } closeButtonText="close" isOpen={ this.state.controlledModalOpen } title="Demo Controlled Modal" ><p>This modal is controlled by the parent component. It can be opened and closed by padding props to the component</p></ControlledAlertModal>
        <button onClick={() => { this.openControlledModal("text is hard coded in this example", this.refs.controlFocus) }} >Open Controlled Modal</button>
        <br />
        <button ref="controlFocus">button below</button>

    );
  }
}
  `}
          </pre>


      </div>
    );
  }
}
