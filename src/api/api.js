import axios from "axios";


const api = {};

api.get = async (url) => {
    let res = await axios.get(url);
    return res;
}

api.post = async (url, data) => {
    let res = await axios.post(url, data);
    return res;
}

export default api;