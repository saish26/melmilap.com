import { GetRequest, PostRequest } from "@/plugins/https";

export const APIGetMatchedUsers = (id: any) => GetRequest(`user/${id}`);
export const APIGetSingleUser = (id: any) => GetRequest(`/user/details/${id}`);

export const APIFindByInterest = async (data: any, id: any) =>
    PostRequest(`/user/match/${id}`, data);
