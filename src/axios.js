// Axios library is helpful for making requests to the server and getting the response
import axios from "axios";

//create instance used to append the beginning of url or the data upon the request
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})  

export default instance;
