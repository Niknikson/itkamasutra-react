import { stopSubmit } from "redux-form";
import { AuthApi } from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
 
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return {
        ...state,
        ...action.payload,
       
      };
    default:
      return state;
  }
};
export const setUserData = (userId, email , login, isAuth) => {
  return {
    type: SET_USERS_DATA,
    payload: { userId, email, login, isAuth },
  };
};

export const meThunk = () => {
  return (dispatch) => {
    return AuthApi.me().then((response) => {
      if (response.resultCode === 0) {
        // статус  0 вертається якщо пройшла перевірка авторизаціі і вертаються дані
        let { id, email, login } = response.data;
        dispatch(setUserData(id, email, login, true));
      }
    });
  };
};

export const loginThunk = (email, password, rememberMe) => { 
  return (dispatch) => {
    AuthApi.login(email, password, rememberMe).then((response) => {
      if (response.resultCode === 0) { 
        dispatch(meThunk());
      } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
  };
};



export const logoutThunk = () => {
  return (dispatch) => {
    AuthApi.logout().then((response) => {
      debugger
      if (response.resultCode === 0) {
       dispatch(setUserData(null, null, null, false));
      }
    });
  };
};



export default authReduser;
