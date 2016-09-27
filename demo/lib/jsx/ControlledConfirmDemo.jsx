import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import ControlledConfirmModal  from './ControlledConfirmModal.jsx';

import ListItem, {JustConfirm, ConfirmFunctionAndUseTickBox} from './ListItem.jsx';



const ConfirmModalTextOptions = { ConfirmFunctionAndUseTickBox, JustConfirm };


export default class ControlledConfirmDemo  extends Component {
  constructor(props) {
    super(props);

   this.state = {

      showConfirmModal: false,
      confirmModalTextOptions: 'ConfirmFunctionAndUseTickBox', //"Are you sure",  //()=>{return <div>Are you sure?</div>},
      confirmModalConfirmButtonText: 'Confirm',
      modalConfirmedFunction: ()=>{},

      tickedBox: false,
 
    };
  }


  confirmModal(text, ConfirmModalConfirmButtonText, ModalConfirmedFunction, returnModalFocusTo){

      this.setState({
        confirmModalTextOptions: text,
        modalConfirmButtonText: ConfirmModalConfirmButtonText,
        modalConfirmedFunction: ModalConfirmedFunction,
        returnModalFocusTo: returnModalFocusTo,
        
        showConfirmModal: true,
      });

  }

  closeConfirmModal() {
    this.setState({
      showConfirmModal: false,
      tickedBox: false,
    });
    if (this.state.returnModalFocusTo){
      ReactDOM.findDOMNode(this.state.returnModalFocusTo).focus();
      this.setState({
        returnModalFocusTo: false,
      });
    }
  }



  toggleTickedBox() {
    this.setState({
      tickedBox: !this.state.tickedBox,
    });
  }

  modalConfirmedFunction() {
    let notTicked = this.state.tickedBox?'':'not ';
    alert("your modal was confirmed.  In here, you could delete/copy data, etc and you did "+notTicked+"tick the option");
  }
  modalConfirmedSimple() {
    alert("your modal was confirmed");
  }





  render () {

    const ConfirmText = ConfirmModalTextOptions[this.state.confirmModalTextOptions];

    return (
      <div>

        This example below is an example to show a ControlledConfirmModal. <br/>   
        
        <ControlledConfirmModal isOpen={ this.state.showConfirmModal} close={ this.closeConfirmModal.bind(this)}
          modalConfirmButtonText={this.state.confirmModalConfirmButtonText} 
          onConfirmFunction={this.state.modalConfirmedFunction.bind(this)}><ConfirmText toggle={this.toggleTickedBox.bind(this)} /></ControlledConfirmModal>

    
        <ListItem  number='1'   confirmFunction = {this.confirmModal.bind(this)} ModalConfirmedFunction={this.modalConfirmedFunction.bind(this)}  confirmText="ConfirmFunctionAndUseTickBox"  />
        <ListItem  number='2'   confirmFunction = {this.confirmModal.bind(this)} ModalConfirmedFunction={this.modalConfirmedFunction.bind(this)} confirmText="ConfirmFunctionAndUseTickBox"  />
        <ListItem  number='3'   confirmFunction = {this.confirmModal.bind(this)} ModalConfirmedFunction={this.modalConfirmedSimple.bind(this)} confirmText="JustConfirm">This is a simple confirmModal</ListItem>


        <br />
        <br />
         This is achieved with







        <pre>
{`import ControlledConfirmModal  from './ControlledConfirmModal.jsx';

import ListItem, {JustConfirm, ConfirmFunctionAndUseTickBox} from './ListItem.jsx';



const ConfirmModalTextOptions = { ConfirmFunctionAndUseTickBox, JustConfirm };


export default class ControlledConfirmDemo  extends Component {
  constructor(props) {
    super(props);

   this.state = {

      showConfirmModal: false,
      confirmModalTextOptions: 'ConfirmFunctionAndUseTickBox', //"Are you sure",  //()=>{return <div>Are you sure?</div>},
      confirmModalConfirmButtonText: 'Confirm',
      modalConfirmedFunction: ()=>{},

      tickedBox: false,
 
    };
  }


  confirmModal(text, ConfirmModalConfirmButtonText, ModalConfirmedFunction, returnModalFocusTo){

      this.setState({
        confirmModalTextOptions: text,
        modalConfirmButtonText: ConfirmModalConfirmButtonText,
        modalConfirmedFunction: ModalConfirmedFunction,
        returnModalFocusTo: returnModalFocusTo,
        
        showConfirmModal: true,
      });

  }

  closeConfirmModal() {
    this.setState({
      showConfirmModal: false,
      tickedBox: false,
    });
    if (this.state.returnModalFocusTo){
      ReactDOM.findDOMNode(this.state.returnModalFocusTo).focus();
      this.setState({
        returnModalFocusTo: false,
      });
    }
  }



  toggleTickedBox() {
    this.setState({
      tickedBox: !this.state.tickedBox,
    });
  }

  modalConfirmedFunction() {
    let notTicked = this.state.tickedBox?'':'not ';
    alert("your modal was confirmed.  In here, you could delete/copy data, etc and you did "+notTicked+"tick the option");
  }
  modalConfirmedSimple() {
    alert("your modal was confirmed");
  }





  render () {

    const ConfirmText = ConfirmModalTextOptions[this.state.confirmModalTextOptions];

    return (
      <div>

        This example below is an example to show a ControlledConfirmModal. <br/>   
        
        <ControlledConfirmModal isOpen={ this.state.showConfirmModal} close={ this.closeConfirmModal.bind(this)}
           
          modalConfirmButtonText={this.state.confirmModalConfirmButtonText} 
          onConfirmFunction={this.state.modalConfirmedFunction.bind(this)}><ConfirmText toggle={this.toggleTickedBox.bind(this)} /></ControlledConfirmModal>

    
        <ListItem  number='1'   confirmFunction = {this.confirmModal.bind(this)} ModalConfirmedFunction={this.modalConfirmedFunction.bind(this)}  confirmText="ConfirmFunctionAndUseTickBox"  />
        <ListItem  number='2'   confirmFunction = {this.confirmModal.bind(this)} ModalConfirmedFunction={this.modalConfirmedFunction.bind(this)} confirmText="ConfirmFunctionAndUseTickBox"  />
        <ListItem  number='3'   confirmFunction = {this.confirmModal.bind(this)} ModalConfirmedFunction={this.modalConfirmedSimple.bind(this)} confirmText="JustConfirm"  >This is a simple confirmModal</ListItem>

      </div>
    );
  }
}
  `}
          </pre>
And in a file ListItem.jsx:

  <pre>
  {`


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


  `}
  </pre>

      </div>
    );
  }
}
