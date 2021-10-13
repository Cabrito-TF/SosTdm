  
import axios from 'axios';

const api = axios.create({ baseURL: "http://192.168.150.96:8080" });

export default api;