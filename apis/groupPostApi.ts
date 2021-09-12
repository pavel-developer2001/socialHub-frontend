import SocialHubApi from "./SocialHubApi";
export const GroupPostApi = {
  async getFetchGroupPosts(id: any) {
    try {
      const data = await SocialHubApi.get("/groups/posts/" + id);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getFetchGroupPost(id: any) {
    try {
      const data = await SocialHubApi.get("/groups/posts/item/" + id);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async addFetchGroupPost(payload: object) {
    try {
      const data = await SocialHubApi.post("/groups/posts/create", payload);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async removeFetchGroupPost(id: number) {
    try {
      const data = await SocialHubApi.delete("/groups/posts/" + id);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async editFetchGroupPost(payload: object) {
    try {
      const data = await SocialHubApi.put("/groups/posts/edit", payload);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
