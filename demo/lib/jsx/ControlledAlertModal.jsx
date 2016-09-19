import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import classnames from 'classnames';
import Modal  from './Modal.jsx';

export default class ControlledAlertModal extends Component {

  componentDidUpdate(x,y){
    if (this.props.isOpen){
      ReactDOM.findDOMNode(this.refs.closeAlert).focus();
    }
  }
  


  render () {
      return (
        <div>
          
          <Modal
            isOpen={ this.props.isOpen}
            shouldCloseOnOverlayClick={this.props.shouldClose} 
            close={ this.props.close}
            title={this.props.title}
            >
            <div>{ this.props.children}</div>
            <button onClick={ this.props.close.bind(this) } ref="closeAlert">{this.props.closeButtonText || 'Ok'}</button>
          </Modal>
        
        </div>
      );
  }
};


ControlledAlertModal.propTypes = {
  isOpen: PropTypes.bool,
  title:                PropTypes.string,
  text:                 PropTypes.oneOfType([
                            React.PropTypes.object,
                            React.PropTypes.string
                          ]),
  ButtonText: PropTypes.string,
  theme:                PropTypes.string,
  closeIcon:            PropTypes.bool,
  close: PropTypes.func,
  children:             PropTypes.any,
  options:              PropTypes.object,
  id:                   PropTypes.string,
  shouldCloseOnOverlayClick:  PropTypes.bool,
};



//onAfterOpen: React.PropTypes.func,
