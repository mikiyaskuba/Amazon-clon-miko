import axios from "axios";

const axiosInstance = axios.create({
	// baseURL: "http://127.0.0.1:5001/miko-clon/us-central1/api",
    baseURL:"https://amazon-api-deploy-qttz.onrender.com"
});

export { axiosInstance };