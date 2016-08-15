import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import classnames from 'classnames';
import Modal  from './Modal.jsx';

export default class AlertModal extends Component {

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
            shouldCloseOnOverlayClick={true} 
            close={ this.props.close}
            >
            <div>{ this.props.alertModalText}</div>
            <button onClick={ this.props.close.bind(this) } ref="closeAlert">Ok</button>
          </Modal>
        
        </div>
      );
  }
};


AlertModal.propTypes = {
  title:                PropTypes.string,
  text:                 PropTypes.oneOfType([
                            React.PropTypes.object,
                            React.PropTypes.string
                          ]),
  ButtonText: PropTypes.string,
  theme:                PropTypes.string,
  closeIcon:            PropTypes.bool,
  children:             PropTypes.any,
  options:              PropTypes.object,
  id:                   PropTypes.string,
  shouldCloseOnOverlayClick:  PropTypes.bool,
};

//onAfterOpen: React.PropTypes.func,
//shouldCloseOnOverlayClick: React.PropTypes.bool