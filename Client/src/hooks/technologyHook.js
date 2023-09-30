import {endpoints} from "../common/api";
import {fetchGet} from "../common/method";

export const fechtTechnologies = ()=>{
    return fetchGet(endpoints.technology);
}