import React from 'react';

function Repo ({ repoData }) {

    const getDate = () => {
        const currentTime = new Date();
        const updateTime = new Date(repoData.lastUpdated);
        const timeDiff = Math.floor((currentTime - updateTime) / 1000);
        let lastUpdated;
        if (currentTime.getFullYear() != updateTime.getFullYear()) {
            lastUpdated = `on ${updateTime.toLocaleString('default', { month: 'short' })} ${updateTime.getDate()} ${updateTime.getFullYear()}`;
            return lastUpdated;
        }
        if (timeDiff > 2678000) {
            lastUpdated = `on ${updateTime.toLocaleString('default', { month: 'short' })} ${updateTime.getDate()}`;
            return lastUpdated;
        }
        if (Math.floor(timeDiff / 86400) > 0) {
            lastUpdated = `${Math.floor(timeDiff / 86400)} days ago`;
            return lastUpdated;
        }
        if (Math.floor(timeDiff / 3600) > 0) {
            lastUpdated = `${Math.floor(timeDiff / 3600)} hours ago`;
            return lastUpdated;
        }
        if (Math.floor(timeDiff / 60) > 0) {
            lastUpdated = `${Math.floor(timeDiff / 60)} minutes ago`;
            return lastUpdated;
        }
        lastUpdated = `${timeDiff} seconds ago`;
        return lastUpdated;
    }

    return (
        <>
            <div className="repo">
                <div className="repoTitle">
                <h3><a href={repoData.url}>{repoData.name}</a></h3>
                <h4>Language: {repoData.language}</h4>
                <h4>Updated {getDate()}</h4>
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