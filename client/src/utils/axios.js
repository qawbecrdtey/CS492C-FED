import axios from 'axios';

const DOMAIN = 'http://localhost:4000';
axios.defaults.withCredentials = true;

export const request = (method, url, data) => {
  return axios(
    {
      method,
      url: DOMAIN + url,
      data,
    },
    { withCredentials: true }
  )
    .then(res => res.data)
    .catch(err => console.log(err));
};
