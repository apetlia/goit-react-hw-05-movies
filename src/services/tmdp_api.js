import axios from 'axios';

const config = {
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '0fd0cf460e4f0e3140bd2b4e4b9662b5',
  },
};

export const fetchData = url => axios.get(url, config);
