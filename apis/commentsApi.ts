import SocialHubApi from "./SocialHubApi";
export const CommentsApi = {
  async addFetchComment(payload: object) {
    try {
      const data = await SocialHubApi.post("/comments/create", payload);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async removeFetchComment(id: number) {
    try {
      const data = await SocialHubApi.delete(`/comments/?commentId=${id}`);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async editFetchComment(payload: object) {
    try {
      const data = await SocialHubApi.put("/comments/edit", payload);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
