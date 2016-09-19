import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import EnclosedModal  from './EnclosedModal.jsx';


export default class EnclosedDemo  extends Component {
  constructor(props) {
    super(props);

   this.state = {


    };
  }



  render () {
    return (
      <div>

        The examples below are simpler examples to show the basics of EnclosedModal.  Note, there is no methods or variables here to control the modal - it is entirely enclosed.
     

        <EnclosedModal title="Enclosed" 
            shouldCloseOnOverlayClick={true}
            text="hi, this should close if you click outside the box"/ >

        <EnclosedModal title="Enclosed 2" text="hi there"/>
        
        <br />
        <br />
        This is achieved with
        <pre>
          {`import EnclosedModal  from "./EnclosedModal.jsx";

          ...

          render () {
            return (

              <EnclosedModal title="Enclosed" 
                  shouldCloseOnOverlayClick={true}
                  text="hi, this should close if you click outside the box"/ >

              <EnclosedModal title="Enclosed 2" text="hi there"/>
            );
          }
          `}
          </pre>



      </div>
    );
  }
}
