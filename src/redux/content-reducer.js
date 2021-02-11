import { userProfileApi, profileApi } from "../api/api";

const ADD_POST = "ADD-POST";
const UP_DATE_NEW_POST_TEXT = "UPDATE-NEW-POST";
const GET_USER_PROFILE = "GET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const UP_DATE_STATUS = "UP_DATE_STATUS";

let initialState = {
  newPostText: ["hello"],
  profile: null,
  status: "",
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
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case UP_DATE_STATUS:
      return {
        ...state,
        status: action.status,
      };
      

    default:
      return state;
  }
};

export const getStatusAc = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
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

export const getUserProfile = (profile) => {
  return {
    type: GET_USER_PROFILE,
    profile,
  };
};
export const upDateStatusAc = (status) => {
  return {
    type: UP_DATE_STATUS,
    status,
  };
};

export const userProfileThunk = (userId) => {
  return (dispatch) => {
    userProfileApi(userId).then((data) => {
      dispatch(getUserProfile(data));
    });
  };
};

export const getUserStatusThunk = (userId) => {
  return (dispatch) => {
    profileApi.getStatus(userId).then((data) => {
      dispatch(getStatusAc(data));
    });
  };
};

export const upDateStatusThunk = (status) => {
  return (dispatch) => {
    profileApi.upDateStutus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(upDateStatusAc(status));
      }
    });
  };
};

export default contentReducer;
