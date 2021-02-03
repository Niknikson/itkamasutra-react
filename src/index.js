
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import store  from './redux/redax-store';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';


let rerenderEntireTree = () => {
   ReactDOM.render(
     <BrowserRouter>
       <Provider store={store}>
       <App
       />
      </Provider>
     </BrowserRouter>,
     document.getElementById("root")
   );
 };


rerenderEntireTree();

store.subscribe(() => {    
  rerenderEntireTree();
});

// can do this way
//store.subscribe(rerenderEntireTree);