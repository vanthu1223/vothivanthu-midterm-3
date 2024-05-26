import { useState } from "react";
import axios from "axios";
const Repos = () => {
    const [repos, setRepos] = useState([]);
    const getUserRepos = async (id) => {
        try {
            const res = await axios.get(`https://api.github.com/users/${id}/repos`);
            setRepos(res.data);
            console.log(res.data);
        } catch (error) {
            console.log("Error", error);
        }
    };
    return (
        <div>
            {console.log(getUserRepos)}
            {console.log(repos)}
        </div>
    )
}
export default Repos;