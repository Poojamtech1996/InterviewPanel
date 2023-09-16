import {endpoints} from "../common/api";
import {fetchGet} from "../common/method";

export const fetchRoleHook = ()=>{
    return fetchGet(endpoints.role);
}