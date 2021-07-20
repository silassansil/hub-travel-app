import axios from "axios";
import * as config from "../environments/environment";

const instance = axios.create({
    baseURL: config.baseUrl,
    timeout: 30000
});

export default instance;