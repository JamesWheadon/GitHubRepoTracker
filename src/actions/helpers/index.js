import axios from 'axios'

export const getRepoData = async username => {
    try {
        const data = axios.get(`https://api.github.com/users/${username}`);
        if (data.status === 404) {
            throw Error('Invalid Username');
        }
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
}