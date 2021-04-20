import axios from 'axios';

export const getUserData = username => {
    return async dispatch => {
        try {
            const data = await fetchRepoData(username)
            //axios.get(`https://api.github.com/users/${username}`);
            //if (data.status === 404) {
            //    throw Error('Invalid Username');
            //}
            const repoData = data.map(d => {
                return {name: d.name, url: d.html_url, issues: d.open_issues_count, forks: d.forks, stargazers: d.stargazers_count, language: d.language, lastUpdated: d.updated_at};
            });
            dispatch(loadResult(repoData));
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        }
    }
}