import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import Modal  from './Modal.jsx';

export default class ControlledModal extends Component {

  render () {
    return (
      <div>
        <Modal
          isOpen={ this.props.isOpen }
          close={ this.props.closeModal }
          title="Demo Controlled Modal">
          <p>This modal is controlled by the parent component. It can be opened and closed by padding props to the component</p>
          <button onClick={ this.props.closeModal }>Click Here to Close</button>
        </Modal>
      
      </div>
    );
  }
}

ControlledModal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  closeIcon: PropTypes.bool,
  close: PropTypes.func,
  children: PropTypes.any,
  options: PropTypes.object,
  id: PropTypes.string,
  theme: PropTypes.string,
};
