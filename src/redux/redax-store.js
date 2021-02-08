import { combineReducers, createStore } from "redux"
import contentReducer from "./content-reducer";
import dialogsReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  dialogState: dialogsReducer,
  contentState: contentReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store 