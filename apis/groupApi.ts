import SocialHubApi from "./SocialHubApi";
export const GroupApi = {
  async getFetchGroups() {
    try {
      const data = await SocialHubApi.get("/groups/");
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
