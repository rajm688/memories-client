import axios from "axios";
const url = "http://localhost:9000/post";
export const fetchPosts = () => axios.get(url);
