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
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: stateCopy.newPostText,
        lickesCount: 0,
      };
      let stateCopy = { ...state };
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UP_DATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

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
