export const token: string | false | null =
  typeof window !== "undefined" && localStorage.getItem("token");
