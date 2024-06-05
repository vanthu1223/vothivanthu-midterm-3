import { useState } from "react";
import { fetchGetUserRepos } from "../../api";
const Repos = () => {
    const [repos, setRepos] = useState([]);
    const getUserRepos = async (id) => {
        try {
            const res = await fetchGetUserRepos(id);
            setRepos(res);
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