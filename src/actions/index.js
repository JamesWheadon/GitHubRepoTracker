import axios from 'axios';

export const getUserData = (username) => {
    try {
        const data = await axios.get(`https://api.github.com/users/${username}`);
        if (data.status === 404) {
            throw Error('Invalid Username');
        }
    } catch (err) {
        throw new Error(err.message);
    }
}