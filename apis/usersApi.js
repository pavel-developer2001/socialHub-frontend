import SocialHubApi from "./SocialHubApi";
export const UsersApi = {
  async getFetchUsers() {
    try {
      const data = await SocialHubApi.get("/users/");
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getFetchUser(id) {
    try {
      const data = await SocialHubApi.get(`/users/` + id);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
