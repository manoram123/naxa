import axios from 'axios';

export const requestGetData = () => {
    return axios.request({
        method: "get",
        url: "https://admin.naxa.com.np/api/projects "
    })
}