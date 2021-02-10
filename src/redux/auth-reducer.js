import { authApi } from "../api/api";

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
          ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};
export const setUserData = (userId, email , login) => {
  return {
      type: SET_USERS_DATA,
    data: {userId, email, login}
  };
};

export const unfolowedThunk = () => {
  return (dispatch) => {
    authApi().then((response) => {
      if (response.resultCode === 0) {     // статус  0 вертається якщо пройшла перевірка авторизаціі і вертаються дані
        let { id, email, login } = response.data
       dispatch(setUserData(id, email, login));
      }
    });
  };
};





export default authReduser;
