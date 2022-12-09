import axios from 'axios';

const URL = process.env.REACT_APP_BACKEND_URL;

export const UserLogin = (form, handleSuccess) => ({
    type: "LOGIN",
    payload: new Promise((resolve, reject) => {
        axios
            .post(`${URL}/login`, form)
            .then((response) => {
                // console.log(response.data);
                handleSuccess(response.data);
                resolve(response);

            })
            .catch((err) => {
                reject(err);
            })
    })
})

export const userRegister = (form, handleSuccess) => ({
    type : "REGISTER",
    payload: new Promise((resolve, reject) => {
        axios
            .post(`${URL}/register`, form)
            .then((response) => {
                console.log(response.data)
                handleSuccess(response.data);
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            })
    })
})