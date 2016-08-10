# react-modal
a react modal dialog for meteor 1.4 - ported from https://github.com/patrickml/react-modal   which I think is based on https://reactcommunity.org/react-modal/


You can read his more extensive config instructions after following the setup instructions below

These files are intended if you are running meteor 1.4.x.x and your project is using REACT, as setup in https://www.meteor.com/tutorials/react/creating-an-app


You can run meteor in the demo folder to see how it works, to try configuring the modals, and to see the ModalPage implementing the Modals.

All you need to add modals to your project are the 4 files in this core directory.
ControlledModal.jsx, Modal.jsx, EnclosedModal.jsx,  and	main.css

and run these in your project folder:

```
meteor add react-meteor-data
meteor npm install react-addons-pure-render-mixin
meteor npm install react-addons-css-transition-group
meteor npm install --save classnames
```

On the page that you wish to use the modals include:

```
import EnclosedModal  from 'PATH-TO-WHERE-YOU-SAVE-IT/EnclosedModal.jsx';
import ControlledModal  from 'PATH-TO-WHERE-YOU-SAVE-IT/ControlledModal.jsx';
```

and use it by:

`<EnclosedModal title="t2" text="hi there"/>`

or
        
```
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
```
and in your render
```
<ControlledModal closeModal={ this.closeModal.bind(this) } isOpen={ this.state.controlledModalOpen } />
<button onClick={ this.openModal.bind(this) }>Open Controlled Modal</button>
```


If your project supports scss you may want to use the original _react-modal.scss from https://github.com/patrickml/react-modal/blob/master/lib/_react-modal.scss  by patrickml 


