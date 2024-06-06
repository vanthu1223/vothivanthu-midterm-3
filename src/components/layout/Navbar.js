import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
const Navbar = () => {
return (
    <nav className="navbar bg-success">
    <h1>
        <i className="fab fa-github" /> GitHub Finder
    </h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </li>
            <Button/>
        </ul>
    </nav>
);
};
export default Navbar;