import axios from 'axios';

export const getUserData = (username) => {
    try {
        const data = await axios.get(`https://api.github.com/users/${username}`);
        if (data.status === 404) {
            throw Error('Invalid Username');
        }
        const repoData = data.map(d => {
            return {name: d.name, url: d.html_url, issues: d.open_issues_count, forks: d.forks, stargazers: d.stargazers_count, language: d.language, lastUpdated: d.updated_at};
        });
        return repoData;
    } catch (err) {
        throw new Error(err.message);
    }
}