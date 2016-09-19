import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';


export default class Nav  extends Component {
  constructor(props) {
    super(props);

  }

	handleClick(tab) {
        this.props.changeTab(tab);

    }

  render () {
    return (
      <div>
		<ul className="tab">
			{Object.keys(this.props.DemoPages).map(function(tab) {
                return (
					<li key={tab} className={this.props.currentTab == tab ? 'active' : null}> <a onClick={this.handleClick.bind(this, tab)}>{tab}</a></li>
		        );
            }.bind(this))}
		</ul>
	  </div>
	);
  }
};


Nav.propTypes = {
  changeTab:    PropTypes.func.isRequired,
};
