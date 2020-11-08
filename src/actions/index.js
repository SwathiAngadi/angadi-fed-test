import axios from 'axios';

export const USER = "USER";

export function getUsers (count) {
    return axios.get(`https://randomuser.me/api/?results=${count}`).then(res => {
    console.log(res.data.results);
        return {
            type: USER,
            payload: res.data.results
        };
    });
};