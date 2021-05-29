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
};
