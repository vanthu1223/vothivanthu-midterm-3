import React, { useState, useEffect } from "react";
import { fetchGetUserRepos } from "../../api";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const RepoItem = () => {
    const [repoItem, setRepoItem] = useState([]);
    const { id } = useParams();
    // const [user, setUser] = useState({});
    useEffect(() => {
        const getUserRepos = async () => {
            try {
                const res = await fetchGetUserRepos(id);
                if (res) {
                    setRepoItem(res.data);
                } 
            } catch (error) {
                console.error("Error in getUserRepos function:", error);
            }
        };
    
        getUserRepos();
    }, [id]);
    return (
        <div className="repo">
            <h1>Repos</h1>
            <ul>
                {repoItem.map(repo => (
                 <li>
                 <a href={`${repo.html_url}`} target="_blank" key={repo.id}>
                   {repo.name}
                 </a>
               </li>
                
                ))}
            </ul>
        </div>
    );
    
};

export default RepoItem;
