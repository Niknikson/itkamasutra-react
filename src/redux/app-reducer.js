import { meThunk } from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
  initialized: false,
 
};

const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};
export const initializedAC = () => {
  return {
    type: SET_INITIALIZED,
  };
};


export const initializedThunk = () => {
    return (dispatch) => {
        let promise = dispatch(meThunk());
         Promise.all([promise])
            .then(() => {
            dispatch(initializedAC());
        })
    }
}

export default appReduser;