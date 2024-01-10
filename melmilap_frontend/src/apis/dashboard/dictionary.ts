import {
  DeleteRequest,
  GetRequest,
  PatchRequest,
  PostRequest,
} from "@/plugins/https";

//word
export const APIGetDictionaryList = (page: any) =>
  GetRequest(`/dictionary/?page_no=${page}&select=${10}&appId=lang-inst-g`);

export const APIPostDictionary = async (data: any) =>
  PostRequest("/dictionary", data);
export const APIDeleteDictionary = async (data: any) =>
  DeleteRequest(`/dictionary/${data}`);
export const APISeachDictionary = async (data: any) =>
  GetRequest(`/dictionary/search?appId=lang-inst-g&search_for=${data}`);
export const APISingleDictionary = async (data: any) =>
  GetRequest(`/dictionary/details/${data}`);

export const APIUpdateDictionary = async (data: any, id: any) =>
  PatchRequest(`/dictionary/${id}`, data);

//verbs

export const APIGetVerbsList = () => GetRequest(`/verb/all`);

export const APIPostVerbs = async (data: any) =>
  PostRequest("/verb/word-with-tens", data);
export const APIDeleteVerbs = async (data: any) =>
  DeleteRequest(`verb/${data}`);
export const APISeachVerbs = async (data: any) =>
  GetRequest(`/dictionary/search?appId=lang-inst-g&search_for=${data}`);
export const APISingleVerbs = async (data: any) =>
  GetRequest(`/dictionary/details/${data}`);

export const APIUpdateTense = async (data: any, id: any) =>
  PatchRequest(`verb/tense/${id}`, data);

export const APIUpdateVerbs = async (data: any, id: any) =>
  PatchRequest(`/verb/${id}`, data);

//Users
export const APIGetAllUsers = async () =>
  GetRequest(`/users?appId=lang-inst-g`);
export const APIGetUserDetails = async (id: any) =>
  GetRequest(`/user-details/${id}`);

export const APIUpdateUserStatus = async (data: any) =>
  PatchRequest(`/users/update-status?appId=lang-inst-g`, data);
