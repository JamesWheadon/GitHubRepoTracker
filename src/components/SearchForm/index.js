import React, { useState } from 'react';
import './style.css';

function SearchForm({ getRepos }) {
    const [ username, setUsername ] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        getRepos(username);
    };

    const updateInput = e => {
        const input = e.target.value;
        setUsername(input);
    };

    return (
        <form onSubmit={handleSubmit} role="form">
            <label htmlFor="username">GitHub Username:</label>
            <input type="text" id="username" value={username} onChange={updateInput}/>
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchForm;