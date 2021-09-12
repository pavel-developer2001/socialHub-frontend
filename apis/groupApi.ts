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
  async removeFetchGroup(id: number) {
    try {
      const data = await SocialHubApi.delete("/groups/" + id);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async editFetchGroup(payload: object) {
    try {
      const data = await SocialHubApi.put("/groups/edit", payload);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
