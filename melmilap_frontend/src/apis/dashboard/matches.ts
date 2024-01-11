import { GetRequest, PostRequest } from "@/plugins/https";

export const APIGetMatchedUsers = (id: any) => GetRequest(`user/${id}`);

// export const APILoginUser = async (data: any) =>
//   PostRequest("/auth/login", data);
