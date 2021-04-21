import React from 'react';

function Repo ({ repoData }) {

    const getDate = () => {
        const currentTime = new Date();
        const updateTime = new Date(repoData.lastUpdated);
        const timeDiff = (currentTime - updateTime) / 1000;
        let lastUpdated;
        if (currentTime.getFullYear() != updateTime.getFullYear()) {
            lastUpdated = `${updateTime.toLocaleString('default', { month: 'short' })} ${updateTime.getDate()} ${updateTime.getFullYear()}`;
            return lastUpdated;
        }
        if (timeDiff > 86400) {
            lastUpdated = `${updateTime.toLocaleString('default', { month: 'short' })} ${updateTime.getDate()}`;
            return lastUpdated;
        }
        return 'test';
    }

    return (
        <>
            <div className="repo">
                <div className="repoTitle">
                <h3><a href={repoData.url}>{repoData.name}</a></h3>
                <h4>Language: {repoData.language}</h4>
                <h4>Updated on {getDate()}</h4>
                </div>
                <ul className="repoData">
                    <li>Issues: {repoData.issues}</li>
                    <li>Stargazers: {repoData.stargazers}</li>
                    <li>Forks: {repoData.forks}</li>
                </ul>
            </div>
            <hr />
        </>
    );
};

export default Repo;