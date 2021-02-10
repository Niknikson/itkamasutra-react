import { followedApi, getUsersApi, resUsersApi, unfollowedApi } from "../api/api";

const FOLLOW = "FOLLOW";
const GET_USERS = "GET-USERS";
const SET_CURRENT_PAGE = 'SET-USERS'
// const SET_TOTAL_USERS_COUNT = "SET-TOTAL-COUNT"
const TOGGLE_ISFETH = 'TOGGLE-ISFETCH'
const TOGGLE_DISEBEL = "TOGGLE-DISEBEL";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 30,
  currenPage: 1,
  isFetching: false,
  disabelFollow: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_USERS:
      return {
        ...state,
        users: action.users,
      }
    
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      }
    
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currenPage: action.page,
      };

    case TOGGLE_ISFETH:
      return {
        ...state,
        isFetching: action.isFetcing,
      };

    case TOGGLE_DISEBEL: {
      return {
        ...state,
        disabelFollow: action.disabel
          ? [...state.disabelFollow, action.userId]
          : state.disabelFollow.filter((id) => id != action.userId),
      };
    }
      
    // case SET_TOTAL_USERS_COUNT: return { ...state, totalUsersCount: action.totalCount,}
    default:
      return state;
  }
}
export const getUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};
export const followed = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
}
export const isFethcing = (isFetcing) => {
  return {
    type: TOGGLE_ISFETH,
    isFetcing,
  };
};
export const disabelFollowAc = (disabel, userId) => {
  return {
    type: TOGGLE_DISEBEL,
    disabel,
    userId,
  };
};
// export const setTotalCountAC = (totalCount) => {
//   return {
//     type: SET_TOTAL_USERS_COUNT,
//     totalCount,
//   };
// };
export const setCurrenPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page,
  };
}



export const getUsersThunkCreator = (currenPage, pageSize) => {
  return (dispatch) => {
    dispatch(isFethcing(true));
    getUsersApi(currenPage, pageSize).then((response) => {
      dispatch(isFethcing(false));
      dispatch(getUsers(response.items));
    });
  };
}
export const getNewPagUserThunk = (pageNuber, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrenPage(pageNuber))
    dispatch(isFethcing(true))
    resUsersApi(pageNuber, pageSize).then((response) => {
      dispatch(isFethcing(false))
      dispatch(getUsers(response.items))
    })
  }
}
export const folowedThunk = (id) => {
  return (dispatch) => {
    dispatch(disabelFollowAc(true, id));
    followedApi(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followed(id))
      }
      dispatch(disabelFollowAc(false, id));
    });
  };
}
export const unfolowedThunk = (id) => {
  return (dispatch) => {
    dispatch(disabelFollowAc(true, id));
    unfollowedApi(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followed(id));
      }
      dispatch(disabelFollowAc(false, id));
    });
  };
}

export default usersReducer
