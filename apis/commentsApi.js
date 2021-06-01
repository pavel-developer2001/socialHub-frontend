import SocialHubApi from "./SocialHubApi";
export const CommentsApi = {
  async addFetchComment(payload) {
    try {
      const data = await SocialHubApi.post("/comments/create", payload);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
