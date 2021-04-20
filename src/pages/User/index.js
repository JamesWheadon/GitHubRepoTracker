import React from 'react';
import { SearchForm, Repo } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData } from '../../actions';

//const User = () => <h1>Users coming soon...!</h1>

function User() {

    const result = useSelector(state => state.result);
    const error = useSelector(state => state.error)

    const dispatch = useDispatch();
    
    const search = username => dispatch(getUserData(username));

    const renderRepos = () => {
        return result.data.map(r =>
            <Repo repoData={r} key={result.data.indexOf(r)}/>
        );
    }

    return (
        <>
        <SearchForm getRepos={search}/>
        { error ? <p role="alert">Oops there's been an error!</p> : renderRepos() }
        </>
    );
};

export default User;