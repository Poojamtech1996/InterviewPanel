import {endpoints} from "../common/api";
import {fetchGet, fetchPost } from "../common/method";

export const fetchUsers = ()=>{
   return fetchGet(`${endpoints.user}/all`);
}

export const fetchUserHook = (data)=>{
    return fetchPost(`${endpoints.user}/new`,data);
}