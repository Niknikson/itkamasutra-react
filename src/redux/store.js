import contentReducer from "./content-reducer";
import dialogsReducer from "./dialog-reducer";

  
  
let store = {
  _state: {
    contentState: {
      newPostText: [""],
      postData: [
        { id: 1, message: "Hello", lickesCount: 23 },
        { id: 2, message: "How are you my freand", lickesCount: 49 },
      ],
    },

    dialogState: {
      newMessageText: [""],
      dialogsData: [
        { id: 1, name: "Nick" },
        { id: 2, name: "Kris" },
      ],
      messageData: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Hello" },
        { id: 4, message: "Hello" },
      ],
    },
  },

  
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSub = observer;
  },
  _callSub() {},

  // addPosts  ()  {
  // let newPost = {
  //   id: 3,
  //   message: this._state.contentState.newPostText,
  //   lickesCount: 0
  // };
  // this._state.contentState.postData.push(newPost);
  // this._state.contentState.newPostText = "";
  // this._callSub(this._state);
  // },

  //    updateNewPostText  (newText)  {
  //   this._state.contentState.newPostText = newText;
  //   this._callSub(this._state);
  // },

  dispatch(action) {

    this._state.dialogState = dialogsReducer(this._state.dialogState, action);
    this._state.contentState = contentReducer(this._state.contentState, action);

    this._callSub(this._state);

  },
};


export default store;
window.store = store;
