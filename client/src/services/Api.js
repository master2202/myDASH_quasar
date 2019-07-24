import axios from "axios";

//CONNECT to SERVER
export default () => {
  return axios.create({
    baseURL: `https://mydash-server.herokuapp.com`
    //baseURL: `http://192.168.1.2:3000`
    //baseURL: `http://localhost:3000`
    // baseURL: `/`
  });
};
