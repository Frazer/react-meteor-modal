import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import ConfirmModal  from './ConfirmModal.jsx';


export default class ConfirmDemo  extends Component {
  constructor(props) {
    super(props);

   this.state = {

    };
  }


//////////
  //passed to the confirm modal
  exampleFunction(){
    alert("this could be any function you like");
  }




  render () {
    return (
      <div>
      Here is an example of a confirm modal that triggers any function you pass to it.

        <ConfirmModal openButtonTitleTag="confirm"  openButtonClassName="confirm" 
                      openButtonText="Example of Confirm Modal" title="It's over!" 
                      text="This will trigger a function if you click confirm" 
                      modalConfirmButtonText="Are you sure?" 
                      onConfirmFunction={this.exampleFunction.bind(this)}   // this should be the function you want triggered - ie: this.functionBeingChecked.bind(this)
                      />

         <br />
        <br />
         This is achieved with
        <pre>
{`import ConfirmModal  from './ConfirmModal.jsx';



class ConfirmModalDemo  extends Component {

 ...
  exampleFunction(){
    alert("this could be any function you like");
  }




  render () {
    return (
      <div>

        <ConfirmModal openButtonTitleTag="confirm"  openButtonClassName="confirm" 
                      openButtonText="Example of Confirm Modal" title="It's over!" 
                      text="This will trigger a function if you click confirm" 
                      modalConfirmButtonText="Are you sure?" 
                      onConfirmFunction={this.exampleFunction.bind(this)}   // this should be the function you want triggered - ie: this.functionBeingChecked.bind(this)
                      />
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
