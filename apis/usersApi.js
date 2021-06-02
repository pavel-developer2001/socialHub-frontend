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
  async loginUser(payload) {
    const data = await SocialHubApi.post("/users/login", payload);
    window.localStorage.setItem("token", data.data.token);
    window.localStorage.setItem("user", JSON.stringify(data.data.data));
    return data.data.token;
  },
  async registerUser(payload) {
    const data = await SocialHubApi.post("/users/register", payload);
    window.localStorage.setItem("token", data.data.token);
    window.localStorage.setItem("user", JSON.stringify(data.data.data));
    return data.data.token;
  },
};
