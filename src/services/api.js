import axios from "axios";

axios.defaults.baseURL = ' https://pixabay.com/api';
const API_KEY = '29728762-2a6b84e3d27132460ba58a3d0';

export default async function api (query) {
    try {
     const response = await axios.get(
          `https://pixabay.com/api/?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        console.log(response.data);
        return response.data
        
    } catch (error) {
        
    }
};
