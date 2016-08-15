# react-modal
a react modal dialog for ES6 - meteor 1.4.x.x
ported from https://github.com/patrickml/react-modal   which I think is based on  https://github.com/reactjs/react-modal , {https://reactcommunity.org/react-modal/ ,  https://www.npmjs.com/package/react-modal }



These files are intended if you are running meteor 1.4.x.x and your project is using REACT, as setup in https://www.meteor.com/tutorials/react/creating-an-app


You can run meteor in the demo folder to see how it works, to try configuring the modals, and to see the ModalPage implementing the Modals.

All you need to add modals to your project are the 2 files in this core directory.    Modal.jsx,  and	main.css

and run these in your project folder:

```
meteor add react-meteor-data
meteor npm install react-addons-pure-render-mixin
meteor npm install react-addons-css-transition-group
meteor npm install --save classnames
```

You may also want to use ConfirmModal.jsx, or  AlertModal.jsx.  

There are 2 other simple demos you might like to configure for yourself.  EnclosedModal.jsx,ControlledModal.jsx

On the page that you wish to use the modals include:

```
import ConfirmModal  from 'PATH-TO-WHERE-YOU-SAVE-IT/ConfirmModal.jsx';

...

      //  in your render function

        <ConfirmModal openButtonTitleTag="delete"  openButtonClassName="delete" openButtonText="&times;" title="It's over!" text="This will delete this card from your deck" modalConfirmButtonText="Gone for good?" onConfirmFunction={this.yourDeleteFunction.bind(this)}/>

```

or

```
import AlertModal  from 'PATH-TO-WHERE-YOU-SAVE-IT/AlertModal.jsx';

...

export default class App  extends Component {
  constructor(props) {
    super(props);

   this.state = {

      ////  for  AlertModal

      showAlertModal: false,
      alertModalText: 'Alert',

    };
  }



///////////// You might want to use these functions

  alertModal(text, returnModalFocusTo){
    
      this.setState({
        alertModalText: text,
        showAlertModal: true,
        returnModalFocusTo: returnModalFocusTo,     ///  what to give .focus to after closing Modal
      });
           
  }

  closeAlertModal() {
    this.setState({
      showAlertModal: false,
    });
    if (this.state.returnModalFocusTo){
      ReactDOM.findDOMNode(this.state.returnModalFocusTo).focus();
      this.setState({
        returnModalFocusTo: false,
      });
    }
  }


//////////
  //some other action should fire the  AlertModal 
  // - if you wish to send the focus to some other ref="DomElement", change this.refs.controlFocus
  exampleFunction(){
    //blah blah
    this.alertModal("this is using the AlertModal. Notice the focus is automatically on the ok button,  and after this closes, you can control where the focus should go by using a ref tag inyour render function", this.refs.controlFocus);
  }



      //  in your render function

        <AlertModal isOpen={this.state.showAlertModal} close={ this.closeAlertModal.bind(this)}
            alertModalText={this.state.alertModalText}
          />
```

or you may like to play with these:

```
import EnclosedModal  from 'PATH-TO-WHERE-YOU-SAVE-IT/EnclosedModal.jsx';

...

      //  in your render function
      <EnclosedModal title="t2" text="hi there"/>

```

or
        
```

import ControlledModal  from 'PATH-TO-WHERE-YOU-SAVE-IT/ControlledModal.jsx';

...

export default class YourApp  extends Component {
  constructor(props) {
    super(props);

   this.state = {
      controlledModalOpen: false,
    };
  }

  openModal () {
    this.setState({
      controlledModalOpen : true
    });
  }

  closeModal () {
    this.setState({
      controlledModalOpen : false
    });
  }

  ...

    and in your render function

    <ControlledModal closeModal={ this.closeModal.bind(this) } isOpen={ this.state.controlledModalOpen } />
    <button onClick={ this.openModal.bind(this) }>Open Controlled Modal</button>
    
```


If your project supports scss you may want to use the original _react-modal.scss from https://github.com/patrickml/react-modal/blob/master/lib/_react-modal.scss  by patrickml 


You can read his more extensive styling instructions at https://github.com/patrickml/react-modal
