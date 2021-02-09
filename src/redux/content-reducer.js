const ADD_POST = "ADD-POST";
const UP_DATE_NEW_POST_TEXT = "UPDATE-NEW-POST";
const GET_USER_PROFILE = "GET_USER_PROFILE";


let initialState = {
  newPostText: ["hello"],
  profile: null,
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
        newPostText: action.newText,
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case ADD_POST:
      let newText = state.newPostText;
      return {
        ...state,
        newPostText: "",
        postData: [
          ...state.postData,
          { id: 3, message: newText, lickesCount: 100 },
        ],
      };

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

export const getUserProfile = (profile) => {
  return {
    type: GET_USER_PROFILE,
    profile,
  };
};

export default contentReducer;
