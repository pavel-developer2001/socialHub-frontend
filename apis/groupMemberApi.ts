import SocialHubApi from "./SocialHubApi";
export const GroupMemberApi = {
  async signFetchGroupMember(payload: object) {
    try {
      const data = await SocialHubApi.post("/groups/members/sign", payload);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
  async unsubcribeFetchGroupMember(payload: any) {
    try {
      const data = await SocialHubApi.delete(
        `/groups/members/unsubscribe?groupId=${payload.groupId}&userId=${payload.userId}`
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },
};
