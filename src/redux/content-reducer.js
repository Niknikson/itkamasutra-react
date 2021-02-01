const ADD_POST = "ADD-POST";
const UP_DATE_NEW_POST_TEXT = "UPDATE-NEW-POST";

const contentReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
      id: 3,
      message: state.newPostText,
      lickesCount: 0,
    };
    state.postData.push(newPost);
            state.newPostText = ""
            return state;

      case UP_DATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const apDateNewPostActionCreator = (text) => {
  return {
    type: UP_DATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default contentReducer;