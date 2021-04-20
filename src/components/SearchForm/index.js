import React, { useState } from 'react';

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
            <label for="username">GitHub Username:</label>
            <input type="text" id="username" value={location} onChange={updateInput}/>
            <input type="submit" value="Search" />
        </form>
    );
};

export default SearchForm;