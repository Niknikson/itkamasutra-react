import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "7c67b159-e5ff-4fac-978b-c79c826ac8c1",
  },
});

export const getUsersApi = (currenPage = 1, pageSize = 10) => {
  return instance
    .get(`users?page=${currenPage}&counnt=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};


export const resUsersApi = (pageNuber = 1, pageSize = 10) => {
  return instance
    .get(`users?page=${pageNuber}&counnt=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};


export const unfollowedApi = (id) => {
  return instance
    .delete(`follow/${id}`)
    .then((response) => {
      return response.data;
    });
}

export const followedApi = (id) => {
  return instance.post(`follow/${id}`,{}).then((response) => {
    return response.data;
  });
};

export const authApi = () => {
  return instance.get(`auth/me`)
    .then((response) => {
      return response.data;
    });
};

export const userProfileApi = (userId) => {
  return instance.get(`profile/${userId}`).then((response) => {
    return response.data;
  })
}


export const profileApi = {

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => {
      return response.data
      
    })
  },  
  upDateStutus(status) {
    return instance.put(`profile/status`, { status: status })
  }
}