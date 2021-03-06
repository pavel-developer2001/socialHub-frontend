import SocialHubApi from "./SocialHubApi";
export const GroupCommentApi = {
  async getFetchGroupComments(id: any) {
    try {
      const data = await SocialHubApi.get("/groups/comments/" + id);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async addFetchGroupComment(payload: object) {
    try {
      const data = await SocialHubApi.post("/groups/comments/create", payload);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async removeFetchGroupComment(id: number) {
    try {
      const data = await SocialHubApi.delete("/groups/comments/" + id);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async editFetchGroupComment(payload: object) {
    try {
      const data = await SocialHubApi.put("/groups/comments/edit", payload);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
