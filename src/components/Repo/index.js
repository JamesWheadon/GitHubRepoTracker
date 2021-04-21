import React from 'react';
import data from './languageColours.json';
import './style.css'

function Repo({ repoData }) {

    const renderLanguage = () => {
        return <h4><span className="languageColour" style={{
            backgroundColor: getColour()
          }}></span> {repoData.language}</h4>
    }

    const getColour = () => {
        if (repoData.language) {
            console.log(data[repoData.language].color)
            return data[repoData.language].color;
        }
    }

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
                    {renderLanguage()}
                    <h4>Updated {getDate()}</h4>
                </div>
                <ul className="repoData">
                    <li><svg aria-label="fork" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>{repoData.forks}</li>
                    <li><svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>{repoData.stargazers}</li>
                    <li><svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fillRule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>{repoData.issues}</li>
                </ul>
            </div>
            <hr />
        </>
    );
};

export default Repo;