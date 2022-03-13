import axios from 'axios';

// TODO: 80881c50c62fba95fd84dbfc55f0e7dcaf35dbcb

const instance = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
