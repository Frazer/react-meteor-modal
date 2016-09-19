import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Nav  from './Nav.jsx';

import EnclosedDemo  from './EnclosedDemo.jsx';
import ControlledAlertDemo  from './ControlledAlertDemo.jsx';
import ConfirmDemo  from './ConfirmDemo.jsx';


const DemoPages = { EnclosedDemo , ControlledAlertDemo, ConfirmDemo };

export default class App  extends Component {
  	constructor(props) {
    	super(props);

		this.state = {
   			currentTab: 'EnclosedDemo',
   		};
   		this.changeTab = this.changeTab.bind(this);
  	}

	changeTab(tab) {
        this.setState({ currentTab: tab });
    }

  	render () {

		const DemoPage = DemoPages[this.state.currentTab];

    	return (
    		<div>
				<Nav changeTab={this.changeTab} DemoPages={DemoPages} currentTab={this.state.currentTab} />
				<DemoPage />
				
			</div>
		);
  	}
}


App.propTypes = {
};


export default createContainer(() => {
  return {
  };
}, App);