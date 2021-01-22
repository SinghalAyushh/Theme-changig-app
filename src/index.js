import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


import App from "./App";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';  
import { createStore, applyMiddleware } from 'redux';  
import thunk from "redux-thunk";  

import reducer from './Redux/reducer';  
  
const store = createStore(reducer, applyMiddleware(thunk));  
  
ReactDOM.render(  
    <Provider store={store}>  
        <App />  
    </Provider>, document.getElementById('root'));  
  