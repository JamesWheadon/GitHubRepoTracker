import React from 'react';

function Repo ({ repoData }) {
    return (
        <div className="repo">
            <div className="repoTitle">
            <h3><a href={repoData.url}>{repoData.name}</a></h3>
            <h4>Language: {repoData.language}</h4>
            <h4>Last updated: {repoData.lastUpdated}</h4>
            </div>
            <ul className="repoData">
                <li>Issues: {repoData.issues}</li>
                <li>Stargazers: {repoData.stargazers}</li>
                <li>Forks: {repoData.forks}</li>
            </ul>
        </div>
    );
};

export default Repo;