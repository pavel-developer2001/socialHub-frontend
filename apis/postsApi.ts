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
  async getFetchPost(id: number) {
    try {
      const data = await SocialHubApi.get("/posts/" + id);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async addFetchPost(payload: object) {
    try {
      const data = await SocialHubApi.post("/posts/create", payload);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async removeFetchPost(id: number) {
    try {
      const data = await SocialHubApi.delete("/posts/" + id);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async editFetchPost(payload: object) {
    try {
      const data = await SocialHubApi.put("/posts/edit", payload);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
