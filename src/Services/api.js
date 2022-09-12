import axios from "axios";

const Api = axios.create({
  baseURL: "https://dubairroapi.herokuapp.com",
});

export default Api;
