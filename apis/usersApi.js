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
};
