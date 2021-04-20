import React from 'react';

function Repo ({ repoData }) {
    return (
        <div>
            <h3>{repoData.name}</h3>
            <h4>Last updated: {repoData.lastUpdated}</h4>
            <h4>Language: {repoData.language}</h4>
            <ul>
                <li>Issues: {repoData.issues}</li>
                <li>Stargazers: {repoData.stargazers}</li>
                <li>Forks: {repoData.forks}</li>
            </ul>
            <a href={repoData.url}>See more</a>
        </div>
    )
}