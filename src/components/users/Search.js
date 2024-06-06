import React, { useState,useEffect } from "react";
import Users from "./Users";
import { fetchSearchUsers } from "../../api";


const Search = () => {
 
    const [text, setText] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedSearchDetails = JSON.parse(sessionStorage.getItem("searchDetails"));
        if (storedSearchDetails && Array.isArray(storedSearchDetails.searchDetails)) {
            setUsers(storedSearchDetails.searchDetails);
            setText(storedSearchDetails.searchQuery);
        }
    }, []);
    const searchUsers = async (text) => {
        try {
            const response = await fetchSearchUsers(text)
            setUsers(response);
            sessionStorage.setItem('searchDetails', JSON.stringify({ searchQuery: text, searchDetails: response }));
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
        sessionStorage.removeItem('searchDetails');
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