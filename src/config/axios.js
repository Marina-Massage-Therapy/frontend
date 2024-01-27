import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_API_URL;
const Axios = axios.create({
    baseURL: baseUrl,
});

export default Axios;