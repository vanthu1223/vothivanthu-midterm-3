import axios from "axios";
const apiUser = axios.create({
    baseURL: 'https://api.github.com',
    timeout:1000
});
export const fetchGetUser = async (username) => {
    try {
        const res = await apiUser.get(`/users/${username}`);
        return res.data;
    }
    catch (error) 
    {
        console.log("Error ",error);
        throw error;
    }
}
export const fetchGetUserRepos = async (id) => {
    try {
        const res = await apiUser.get(`/users/${id}/repos`)
        return res.data
    }
    catch(error){
        console.log("Error data",error);
    }
}
export const fetchSearchUsers = async (text) => {
    try {
        const res = await apiUser.get(`/search/users?q=${text}`)
        return res.data.items
    }
    catch (error)
    {
        console.log("Error data",error);
    }
} 