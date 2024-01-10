import { PostRequest } from "@/plugins/https";

export const APIRegisterUser = async (data: any) =>
  PostRequest("/auth/register", data);
export const APILoginUser = async (data: any) =>
  PostRequest("/auth/login", data);
