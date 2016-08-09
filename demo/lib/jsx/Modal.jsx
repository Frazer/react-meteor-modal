import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default class Modal extends Component {
  
  constructor(props) {
    super(props);  
    
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    


//export const Modal = ({ title, isOpen, closeIcon, close, children, options, id, theme }) => {

    if (this.props.isOpen) {
      return (
        <ReactCSSTransitionGroup
          transitionName="md-modal"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          <div className={ `md-modal ${this.props.theme || 'default-theme'}` } id={ this.props.id } {...this.props.options}>
            <div className="md-content">
              <h3 className="md-title">
                { this.props.title }
                { this.props.closeIcon && <i className={ `md-close ${this.props.closeIcon}` } onClick={ this.props.close } /> }
              </h3>
              <div className="md-body">
                { this.props.children }
              </div>
            </div>
          </div>
          <div className="md-overlay" onClick={ this.props.close } />
        </ReactCSSTransitionGroup>
      );
    }else{
      return (
        <ReactCSSTransitionGroup
          transitionName="md-modal"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        />
      );
    }
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  closeIcon: PropTypes.bool,
  close: PropTypes.func,
  children: PropTypes.any,
  options: PropTypes.object,
  id: PropTypes.string,
  theme: PropTypes.string,
};
