import axios from 'axios';
const KEY = 'AIzaSyBZvnZ94pSdFbwIhjKvueG8xx4XMR8zI3k'
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults : 5,
        key: KEY
    }
});