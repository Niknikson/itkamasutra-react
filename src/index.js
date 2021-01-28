import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state, { subscribe } from './redux/state';
import "./index.css";
import App from "./App";
import { addPosts } from "./redux/state";
import { updateNewPostText } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

 let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPosts={addPosts}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};


rerenderEntireTree(state);

subscribe(rerenderEntireTree);