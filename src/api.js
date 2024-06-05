import axios from "axios";
const apiUser = axios.create({
    baseURL: 'https://api.github.com',
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
        const res = await apiUser.get(`/users/${id}/repos`);
        return res;
    } catch (error) {
        console.error("Error fetching user repos:", error);
        return null;  // Return a default value in case of an error
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