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
                setRepoItem(res.data);
                console.log(res.data);
            } catch (error) {
                console.log("Error", error);
            }
        };

        getUserRepos();
    }, [id]);

    return (
        <div className="repo">
            <h1>Repos</h1>
            <ul>
                {repoItem.map(repo => (
                    <a href="#"> <li key={repo.id}>{repo.name}</li></a>
                ))}
            </ul>
        </div>
    );
    
};

export default RepoItem;
