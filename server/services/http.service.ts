import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://api.spacexdata.com/v3',
});



export default instance;