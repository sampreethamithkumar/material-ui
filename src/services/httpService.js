const axios = require("axios");

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export default {
  get: axios.get,
};
