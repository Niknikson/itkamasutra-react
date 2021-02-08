const ADD_POST = "ADD-POST";
const UP_DATE_NEW_POST_TEXT = "UPDATE-NEW-POST";

let initialState = {
  newPostText: ["hello"],
  postData: [
    { id: 1, message: "Hello", lickesCount: 23 },
    { id: 2, message: "How are you my freand", lickesCount: 49 },
  ],
};

const contentReducer = (state = initialState, action) => {

  switch (action.type) {
    case UP_DATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case ADD_POST:
     let newText = state.newPostText;
      return {
        ...state,
        newPostText: "",
        postData: [
          ...state.postData,
          { id: 3, message: newText, lickesCount: 100 },
        ],
      }
    
    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const upDateNewPostActionCreator = (text) => {
  return {
    type: UP_DATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default contentReducer;
