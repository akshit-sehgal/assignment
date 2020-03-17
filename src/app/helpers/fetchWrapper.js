
import fetch from 'isomorphic-unfetch';

const fetchRequest = (url, config) => {
    let defaultConfig = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(url, { ...defaultConfig, ...config })
        .then((response) => {
            if (response.ok)
                return response.json();
            else
                throw response;
        })
        .catch((error) => {
            throw error
        }
        );
}
export default fetchRequest;