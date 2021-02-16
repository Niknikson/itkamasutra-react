export const getUsers = (state) => {
    return state.usersPage.users
}
export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};
export const getCurrenPage = (state) => {
  return state.usersPage.currenPage;
};
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};
export const getDisabelFollow = (state) => {
  return state.usersPage.disabelFollow;
};