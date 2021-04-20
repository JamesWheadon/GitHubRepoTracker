import React from 'react';
import { SearchForm } from '../../components';

//const User = () => <h1>Users coming soon...!</h1>

function User() {

    const testFunction = () => {
        console.log('Submit works!');
    };

    return (
        <SearchForm getRepos={testFunction}/>
    );
};

export default User;