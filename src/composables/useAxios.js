import axios from 'axios';

export default  function (endpoint, options = {}){
    const API_URL = 'http://localhost:5000';
    const url = `${API_URL}/${endpoint}`;

    const sendRequest = async () => {
        try {
            const request = await axios(url, options);
            return await request;
        }catch (e) {
            console.log(e);
        }
    }

    return {
        sendRequest
    }
}