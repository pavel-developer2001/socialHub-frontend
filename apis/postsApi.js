import SocialHubApi from "./SocialHubApi";
export const PostsApi = {
  async getFetchPosts() {
    try {
      const data = await SocialHubApi.get("/posts/");
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getFetchPost(id) {
    try {
      const data = await SocialHubApi.get("/posts/" + id);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async addFetchPost(payload) {
    try {
      const data = await SocialHubApi.post("/posts/create", payload);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
