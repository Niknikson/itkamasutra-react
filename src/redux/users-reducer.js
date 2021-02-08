const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN-FOLLOW";
const GET_USERS = "GET-USERS";
const SET_CURRENT_PAGE = 'SET-USERS'
// const SET_TOTAL_USERS_COUNT = "SET-TOTAL-COUNT";


let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 30,
  currenPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users:  action.users ,
      };

    case FOLLOW:
      return {
        ...state,
        users: state.users.map(  (u) => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed };
          }
          return u;
        })
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currenPage: action.page,
      };

    // case SET_TOTAL_USERS_COUNT:
    //   return {
    //     ...state,
    //     totalUsersCount: action.totalCount,
    //   };


    default:
      return state;
  }
}

export const getUsersAC = (users) => {
  return {
    type: GET_USERS,
    users,
  }
}

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  }
}

// export const setTotalCountAC = (totalCount) => {
//   return {
//     type: SET_TOTAL_USERS_COUNT,
//     totalCount,
//   };
// };

export const currentPageAC = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page,
  };
};




export default usersReducer;
