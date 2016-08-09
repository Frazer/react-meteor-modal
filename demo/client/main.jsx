

import React from 'react';

import { Meteor } from 'meteor/meteor';

import { render } from 'react-dom';

 

import ModalPage from '../lib/jsx/ModalPage.jsx';

 

Meteor.startup(() => {

  render(<ModalPage />, document.getElementById('render-target'));

});

