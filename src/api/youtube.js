import axios from 'axios';

const KEY = 'AIzaSyAuemM9CGFNzLR2Js50KUQl0ec0_tH2C5I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        KEY: KEY
    }
});