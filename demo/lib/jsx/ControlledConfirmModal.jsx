import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import classnames from 'classnames';
import Modal  from './Modal.jsx';

export default class ControlledConfirmModal extends Component {

  componentDidUpdate(x,y){
    if (this.props.isOpen){
      ReactDOM.findDOMNode(this.refs.cancelModal).focus();
    }
  }
  

  render () {
      return (
        <div>
          
          <Modal
            isOpen={ this.props.isOpen }
            close={ this.props.close }
            title={ this.props.title}>
            <div>{ this.props.children}</div>
            <button onClick={ this.props.close.bind(this) } ref="cancelModal">{ this.props.modalCancelButtonText ? this.props.modalCancelButtonText:"Cancel"}</button>
            <button onClick={()=>{ this.props.onConfirmFunction(); this.props.close() }}>{ this.props.modalConfirmButtonText ? this.props.modalConfirmButtonText:"Confirm"}</button>
          </Modal>
        
        </div>
      );
  }
};


ControlledConfirmModal.propTypes = {
  onConfirmFunction:    PropTypes.func.isRequired,
  openButtonTitleTag:   PropTypes.string,
  openButtonClassName:  PropTypes.string,
  openButtonText:       PropTypes.string,
  title:                PropTypes.string,
  // text:                 PropTypes.oneOfType([              //func.isRequired,
  //                          React.PropTypes.element,
  //                          React.PropTypes.string
  //                        ]),
  modalConfirmButtonText: PropTypes.string,
  modalCancelButtonText: PropTypes.string,
  theme:                PropTypes.string,
  closeIcon:            PropTypes.bool,
  children:             PropTypes.any,
  options:              PropTypes.object,
  id:                   PropTypes.string,
  shouldCloseOnOverlayClick:  PropTypes.bool,
};

//onAfterOpen: React.PropTypes.func,
//shouldCloseOnOverlayClick: React.PropTypes.bool