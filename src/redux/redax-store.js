import { applyMiddleware, combineReducers, createStore } from "redux";
import authReduser from "./auth-reducer";
import contentReducer from "./content-reducer";
import dialogsReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
  dialogState: dialogsReducer,
  contentState: contentReducer,
  usersPage: usersReducer,
  auth: authReduser,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
