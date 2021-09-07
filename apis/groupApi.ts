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
  async getFetchGroup(id: any) {
    try {
      const data = await SocialHubApi.get("/groups/" + id);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async addFetchGroup(payload: object) {
    try {
      const data = await SocialHubApi.post("/groups/create", payload);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
