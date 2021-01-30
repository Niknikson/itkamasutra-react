const ADD_POST = 'ADD-POST'
const UP_DATE_NEW_POST_TEXT = 'UPDATE-NEW-POST'


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
      dialogsData: [
        { id: 1, name: "Nick" },
        { id: 2, name: "Kris" },
      ],
      messageData: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "You are the best!" },
        { id: 4, message: "You can do it!!!" },
        { id: 5, message: "Lets go" },
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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 3,
        message: this._state.contentState.newPostText,
        lickesCount: 0,
      };
      this._state.contentState.postData.push(newPost);
      this._state.contentState.newPostText = "";
      this._callSub(this._state);
    } else if (action.type === "UPDATE-NEW-POST") {
      this._state.contentState.newPostText = action.newText;
      this._callSub(this._state);
    }
  },
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}


export const apDateNewPostActionCreator= (text) => {
    return {
      type: UP_DATE_NEW_POST_TEXT,
      newText: text,
    };
}


export default store;
window.store = store;
