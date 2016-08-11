import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import Modal  from './Modal.jsx';

export default class ConfirmModal extends Component {

  constructor(props) {
    super(props);  
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      isOpen: true,
    });
  }

  closeModal() {
    this.setState({
      isOpen: false,
    });
  }

  render () {
      return (
        <div>
          <button title={ this.props.openButtonTitleTag} className={ this.props.openButtonClassName} onClick={ this.openModal }>{ this.props.openButtonText ? this.props.openButtonText:"Confirm"}</button>
          
          <Modal
            isOpen={ this.state.isOpen }
            close={ this.closeModal }
            title={ this.props.title}>
            <p>{ this.props.text}</p>
            <button onClick={ this.closeModal }>{ this.props.modalCancelButtonText ? this.props.modalCancelButtonText:"Cancel"}</button>
            <button onClick={()=>{ this.props.onConfirmFunction(); this.closeModal() }}>{ this.props.modalConfirmButtonText ? this.props.modalConfirmButtonText:"Confirm"}</button>
          </Modal>
        
        </div>
      );
  }
};


ConfirmModal.propTypes = {
  onConfirmFunction:    PropTypes.func.isRequired,
  openButtonTitleTag:   PropTypes.string,
  openButtonClassName:  PropTypes.string,
  openButtonText:       PropTypes.string,
  title:                PropTypes.string,
  text:                 PropTypes.string,
  modalConfirmButtonText: PropTypes.string,
  modalCancelButtonText: PropTypes.string,
  theme:                PropTypes.string,
  closeIcon:            PropTypes.bool,
  children:             PropTypes.any,
  options:              PropTypes.object,
  id:                   PropTypes.string,
  shouldCloseOnOverlayClick:  PropTypes.bool,   //assuming no as an answer is required
};

//onAfterOpen: React.PropTypes.func,
