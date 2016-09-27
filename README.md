# react-modal
a react modal dialog for ES6 - meteor 1.4.x.x
ported from https://github.com/patrickml/react-modal   which I think is based on  https://github.com/reactjs/react-modal , {https://reactcommunity.org/react-modal/ ,  https://www.npmjs.com/package/react-modal }



These files are intended if you are running meteor 1.4.x.x and your project is using REACT, as setup in https://www.meteor.com/tutorials/react/creating-an-app


To try the demo, run this in your demo folder:

```
meteor npm install --save react react-addons-pure-render-mixin react-dom classnames react-addons-css-transition-group
```

You can run 'meteor' in the demo folder to see how it works, to try configuring the modals, and to see the DemoPages implementing the Modals.



All you need to add modals to your project are the 2 files in this core directory.    Modal.jsx,  and main.css



You may also want to use EnclosedModal.jsx, ControlledAlertModal.jsx or ConfirmModal.jsx, or ControlledConfrimModal.jsx . 


You can see each of these running in the demo, and to see how to configure some modal, see SomeModalDemo.jsx 


If your project supports scss you may want to use the original _react-modal.scss from https://github.com/patrickml/react-modal/blob/master/lib/_react-modal.scss  by patrickml 


You can read his more extensive styling instructions at https://github.com/patrickml/react-modal
