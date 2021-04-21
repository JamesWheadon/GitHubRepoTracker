import {getRepoData, getUserPicture, loadResult} from './helpers'

export const getUserData = username => {
    return async dispatch => {
        try {
            const data = await getRepoData(username);
            const avatar = await getUserPicture(username);
            const repoData = data.map(d => {
                return {name: d.name, url: d.html_url, issues: d.open_issues_count, forks: d.forks, stargazers: d.stargazers_count, language: d.language, lastUpdated: d.updated_at};
            });
            const userData = {userAvatar: avatar, userRepoData: repoData}
            console.log(userData)
            dispatch(loadResult(userData));
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message });
        }
    }
}