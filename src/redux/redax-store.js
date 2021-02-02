import { combineReducers, createStore } from "redux"
import contentReducer from "./content-reducer";
import dialogsReducer from "./dialog-reducer";

let reducers = combineReducers({
  dialogState: dialogsReducer,
  contentState: contentReducer,
});

let store = createStore(reducers);

export default store 