import axios from "axios";

export const fetchGet = (url)=>{
    return axios.get(url);
}
export const fetchPost = (url,data)=>{
    return axios.post(url,data);
}