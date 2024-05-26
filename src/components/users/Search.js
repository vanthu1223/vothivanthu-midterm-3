import axios from "axios";
import React, { useState } from "react";
import Users from "./Users";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchSearchUsers } from "../../api";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

const Search = () => {
    const history = useHistory();
    const query = useQuery();
    const [text, setText] = useState("");
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState(query.get('searchTerm') || '');
    const [filter, setFilter] = useState(query.get('filter') || '');
    
    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }
      useEffect(() => {
        const params = new URLSearchParams();
        if (searchTerm) params.set('searchTerm', searchTerm);
        if (filter) params.set('filter', filter);
        history.replace({ search: params.toString() });
      }, [searchTerm, filter, history]);

    const searchUsers = async (text) => {
        try {
            const response = await fetchSearchUsers(text)
            setUsers(response);
            } catch (error) {
            console.error("Error fetching data:", error);
            }
        };
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === "") {
            alert("Please enter something");
        } else {
            searchUsers(text);
            setText("");
        }
    };
    const clearUsers = () => {
        setUsers([]);
    }
    const onChange = (e) => setText(e.target.value);
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input
                type="text"
                name="text"
                placeholder="Search User"
                value={text}
                onChange={onChange}
                />
                <input
                type="submit"
                value="Search"
                className="btn btn-success btn-block"
                />
            </form>
            {users.length > 0 && (
                <button className="btn btn-danger btn-block" onClick={clearUsers}>
                Clear
                </button>
            )}
            <Users users={users} />
        </div>  
    );
};
export default Search;